import App from "../App";
import Item from "./Item";

export default function Page({items, home}) {
    return (
        <App>
            {
                items.length > 0 ? (
                    <ul className="-mx-4 flex flex-wrap pb-4">
                        {
                            items.map(item => (<Item key={item.id} item={item} home={home} />))
                        }
                    </ul>
                ) : (
                    <div>
                        Nothing here...
                    </div>
                )
            }
        </App>
    )
}