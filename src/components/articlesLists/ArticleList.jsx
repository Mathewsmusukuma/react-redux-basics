import { List, Avatar, Skeleton, Carousel,Image } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../stateManger/actions/listArticlesAction";
import { deteleArticle } from "../../stateManger/actions/deleteArticleAction";
import CustomLoader from "../CustomLoader";
import AppLayout from "../layouts/AppLayout";

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center !import',
  background: '#364d79 !import',
  marginTop: '12px',
};

const ArticleList = () => {
  const  { articles, loading } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deteleArticle(id));
  };

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    
    <AppLayout>
      <CustomLoader loading={loading}>
      {articles?.length > 0 &&  
      <Carousel autoplay style={contentStyle}>
          
          {articles?.map(data=>(
            <div >
              <Image  src={data?.avatar} />
          </div>
          ))}
          
        </Carousel>}
     {articles?.length > 0 && 
      <List
      itemLayout="horizontal"
      dataSource={articles}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Link
              key="list-delete"
              to={`article/updatearticle/${item?.id}`}
            >
              Update
            </Link>,

            <button
            key="list-update"
            onClick={() => handleDelete(item?.id)}
          >
            Delete
          </button>
          ]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<Link to={`article/details/${item?.id}`}>{item.first_name} {item.last_name}</Link>}
              description={`Contact information - Email address: ${item.email} `}
            />
          </Skeleton>
        </List.Item>
      )}
    />}
    {articles?.length < 1 && <List dataSource={[]}></List>}
      </CustomLoader>
    </AppLayout>
  );
};

export default ArticleList;
