export declare const clearTheSelection: () => void;
export declare const getSelection: () => Selection | null;
export declare const getAnchorElement: (selection: Selection | undefined) => HTMLElement | null;
export declare const moveCursorToEnd: (element: Node | undefined) => void;
export declare const moveCursorToStart: (element: Node | undefined) => void;
export declare const moveCursorToOffset: ({ element, offset }: {
    element: Node | undefined;
    offset: number;
}) => void;
export declare const caretPosition: ({ target }: {
    target: Node;
}) => number | undefined;
