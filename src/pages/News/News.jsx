import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams();
    return (
        <div className="mt-12">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid col-span-1 md:grid-cols-4">
                <div className="md:col-span-3">
                    <h3>Dragon News</h3>

                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default News;