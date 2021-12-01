import { PageHeader, Descriptions, Image, Anchor } from "antd";
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import articleDetails from "../../stateManger/actions/articleDetailsAction";
import CustomLoader from "../CustomLoader";
import AppLayout from '../layouts/AppLayout';

const { Link } = Anchor;

export default function ArticleDetails() {
    const { loading, articles } = useSelector((state) => state.articles);
    const dispatch = useDispatch();
    const { articleID } = useParams(); 
   



    useEffect(()=>{
        dispatch(articleDetails(articleID));
    },[dispatch, articleID])

    return (
        <div>
            <AppLayout>
                <CustomLoader loading={loading}>
                <PageHeader
                    className="site-page-header"
                    onBack={() => window.history.back()}
                    title="Article"
                    subTitle={`This is is about ${articles.data?.first_name}`}
                />
                 <Image
                width={200}
                src={articles?.data?.avatar}
                />
                <Descriptions title="User Info">
                    <Descriptions.Item label="UserName">{`${articles?.data?.first_name} ${articles?.data?.last_name}`}</Descriptions.Item>
                    <Descriptions.Item label="Email">{articles?.data?.email}</Descriptions.Item>
                    <Descriptions.Item label="Link"> <Anchor><Link href={`${articles?.support?.url}`} title="Website URL" /> </Anchor></Descriptions.Item>
                    <Descriptions.Item label="Description">
                    {articles?.support?.text}
                    </Descriptions.Item>
                </Descriptions>
                </CustomLoader>
            </AppLayout>
        </div>
    )
}
