

export class Dom  {

    /**
     * @param tag
     * @param props
     * @param parent
     * @param event
     * @param children
     **/

    constructor (tag, props, parent, event, ...children) {
        this.tag = tag;
        this.props = props;
        this.parent = parent;
        this.event = event;
        this.children = children;
    }

    /**
     * @param {Object} props ex: {src: 'https://www.google.com'} or {class: 'rounded-md'}
     * @param {HTMLElement} element
     **/

    setProps(props = {}, element) {
        if(!props) return;
        if (typeof props === 'string') {
            element.classList.add(...props.split(' '));
        } else if (typeof props === 'object') {
            Object.keys(props).forEach((key) => {
                element.setAttribute(key, props[key]);
                element[key] = props[key];
            });
        }
    }

    /**
     * @param {Array} children ex: ['<p>hello</p>', '<p>world</p>']
     * @param {HTMLElement} element
     **/

    setChildren(children = [], element) {
        children.forEach(child => {
            if (typeof child === 'string') {
                child = document.createTextNode(child);
            }
            element.appendChild(child);
        });
    }

    /**
     * @param {Object} event ex: {type: 'click', callback: (e) => {console.log(e.target)}}
     * @param {HTMLElement} element
     **/

    setEvent(event = {}, element) {
        if(!event) return;
        element.addEventListener(event.type, event.callback);
    }

    /**
     * @param {HTMLElement} parent
     * @param {HTMLElement} element
     **/

    setParent(parent, element) {
        if (typeof parent === 'string') {
            document.querySelector(parent).appendChild(element);
        }  else {
            parent.appendChild(element);
        }
    }

    /**
     * @returns {*}
     **/

    create () {
        const element = document.createElement(this.tag);
        this.setProps(this.props, element);
        this.setChildren(this.children, element);
        this.setEvent(this.event, element);
        this.setParent(this.parent, element);
        return element;
    }

}