import { useSelector } from "react-redux";
import Page from "../Components/Page";

export default function PageOne() {
    const { items } = useSelector(state => state.items);

    return (
        <Page items={items.filter(item => item.page === 1)} />
    )
}