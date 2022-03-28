export const attachHighlightObserver = ({ refContainer, refCode, highlightLines }) => {
  if (!highlightLines || highlightLines.length <= 0) {
    return;
  }
  if (window && 'ResizeObserver' in window) {
    // @ts-ignore
    const observer = new ResizeObserver((_entries) => {
      addHighlight({ refCode, highlightLines });
      observer.disconnect();
    });
    observer.observe(refContainer);
  }
  else {
    // Back in my days...
    setTimeout(() => {
      addHighlight({ refCode, highlightLines });
    }, 100);
  }
};
const addHighlight = ({ highlightLines, refCode }) => {
  if (!refCode.hasChildNodes()) {
    return;
  }
  const { rows, rowsGroup } = findRowsToHighlight({ highlightLines });
  if (rows.length <= 0) {
    return;
  }
  let rowIndex = 0;
  let lastOffsetTop = -1;
  let offsetHeight = -1;
  Array.from(refCode.childNodes).forEach((element) => {
    // We try to find the row index with the offset of the element
    rowIndex = element.offsetTop > lastOffsetTop ? rowIndex + 1 : rowIndex;
    lastOffsetTop = element.offsetTop;
    // For some reason, some converted text element are displayed on two lines, that's why we should consider the 2nd one as index
    offsetHeight = offsetHeight === -1 || offsetHeight > element.offsetHeight ? element.offsetHeight : offsetHeight;
    const rowsIndexToCompare = element.offsetHeight > offsetHeight ? rowIndex + 1 : rowIndex;
    if (rows.indexOf(rowsIndexToCompare) > -1) {
      element.classList.add('highlight', `group-${rowsGroup[`row_${rowsIndexToCompare}`]}`);
    }
  });
  refCode.classList.add('animate');
};
const findRowsToHighlight = ({ highlightLines }) => {
  const groups = highlightLines.split(' ');
  if (!groups || groups.length <= 0) {
    return {
      rows: [],
      rowsGroup: {}
    };
  }
  const rows = [];
  let rowsGroup = {};
  groups.forEach((group, groupIndex) => {
    const index = group.replace(/-/g, ',').split(',');
    if (index && index.length >= 1) {
      const start = parseInt(index[0], 0);
      const end = parseInt(index[1], 0);
      for (let i = start; i <= (isNaN(end) ? start : end); i++) {
        rows.push(i);
        if (!(`row_${i}` in rowsGroup) || rowsGroup[`row_${i}`] > groupIndex) {
          rowsGroup[`row_${i}`] = groupIndex;
        }
      }
    }
  });
  return {
    rows,
    rowsGroup
  };
};
