import { useDispatch } from "react-redux";
import { togglePinned } from "../redux/itemsSlice";

export default function Item({item, home}) {
    const dispatch = useDispatch();

    return (
        <li className="inline-block">
            <button 
                title={`${item.pinned ? 'Unpin from dashboard' : 'Pin to dashboard'}`}
                className={`inline-block m-4 p-4 cursor-pointer w-[10rem] h-[8rem] space-y-2 hover:shadow-xl text-white  
                    ${item.pinned ? `border-b-[8px] ${item.border}`:``} ${item.color ? item.color : 'bg-gray-200'}`} 
                onClick={() => dispatch(togglePinned(item))}>
                    <div>
                        Item {item.name}
                    </div>
                    {
                        !home ? (
                            <div>
                                Pinned : {item.pinned ? 'Yes' : 'No'}
                            </div>
                        ) : (
                            <div>
                                Page : {item.page}
                            </div>
                        )
                    }
            </button>
        </li>
    )
}