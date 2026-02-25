import {  NavLink } from "react-router";

export default function Title(prop : {title: string}) {
    return (<>
    <div className="flex flex-col items-center">
        <NavLink to="/" className="text-3xl font-bold my-4 text-black-600">
            {prop.title}
        </NavLink>
    </div>
    </>);
}