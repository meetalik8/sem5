import React, {useRef, forwardRef} from "react";

const ChildComponent = forwardRef((props,ref)=>{
    const handleBlur =() => {
        alert(`Input value: ${ref.current.value}`);
        ref.current.style.backgroundColor = "yellow";
    };
    return (
        <div className="child-component">
            <input ref={ref} placeholder="Type!" onBlur={handleBlur} onFocus={() => (ref.current.style.backgroundColor = "white")} />
            <button onClick={() => ref.current.focus()}>Focus Input</button>
        </div>
    );
});

const ParentComponent = () => {
    const inputRef = useRef(null);
    return (
        <div className="parent-component">
            <h2>This is forwared ref</h2>
            <ChildComponent ref={(inputRef)}/>
        </div>
    );
};
export default ParentComponent;
