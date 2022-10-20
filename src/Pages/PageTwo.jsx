import { useSelector } from "react-redux";
import Page from "../Components/Page";

export default function PageTwo() {
    const { items } = useSelector(state => state.items);

    return (
        <Page items={items.filter(item => item.page === 2)} />
    )
}