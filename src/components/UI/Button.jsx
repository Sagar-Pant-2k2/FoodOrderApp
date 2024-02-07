export default ({children,textOnly,className,...remaining_props})=>{
    let cssClasses = textOnly?'text-button':'button';
    cssClasses += ' ' +className;
    return <button className={cssClasses} {...remaining_props}>{children}</button>
}