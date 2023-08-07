declare type dom = (element: string|HTMLElement, options?: DomOptions, children?: HTMLElement|HTMLElement[]|NodeList, onAfterAppend?: Function) => HTMLElement;

declare type DomOptions = {
    /**
     * Element HTML attributes
     * ex: { href: 'https://www.google.fr/', target: '_blank' }
     */
    attr?: any;

    /**
     * Element 'textContent'
     */
    text?: string;

    /**
     * Element innerHTML
     */
    html?: string;
};
