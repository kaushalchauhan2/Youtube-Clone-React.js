import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../utils/constant";
import { Context } from '../context/contextApi';

const LeftNav = () => {
    const { selectCategories, setSelectCategories, mobileMenu } = useContext(Context);
    const navigate = useNavigate();

    const clickHandler = (name, type) => {
        switch (type) {
            case "category":
                return setSelectCategories(name);
            case "home":
                return setSelectCategories(name);
            case "menu":
                return false;
            default:
                break;
        }
    }

    return (
        <div
            className={`w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 transform transition-transform duration-300 ${
                mobileMenu ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
        >
            <div className="flex px-5 flex-col">
                {categories.map((item) => (
                    <React.Fragment key={item.name}>
                        <LeftNavMenuItem
                            text={item.type === "home" ? "Home" : item.name}
                            icon={item.icon}
                            action={() => {
                                clickHandler(item.name, item.type);
                                navigate("/");
                            }}
                            className={`${
                                selectCategories === item.name ? "bg-white/[0.15]" : ""
                            }`}
                        />
                        {item.divider && <hr className='my-5 border-white/[0.2]' />}
                    </React.Fragment>
                ))}
                <hr className='my-5 border-white/[0.2]' />
                <div className="text-white/[0.5] text-[12px]">
                    Clone by: Kaushal Chauhan
                </div>
            </div>
        </div>
    );
}

export default LeftNav;
