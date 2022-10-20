import { useSelector } from "react-redux";
import Page from "../Components/Page";

export default function Home() {
    const { items } = useSelector(state => state.items);
    
    const sortedItems = items.filter(item => item.pinned)
        .sort((a,b) => {
            if (a.page !== b.page) return a.page <= b.page ? -1 : 1;
            return a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1;
        });

    return (
        <Page items={sortedItems} home={true} />
    )
}