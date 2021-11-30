import { List, Avatar, Skeleton } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../stateManger/actions/listArticlesAction";
import { deteleArticle } from "../../stateManger/actions/deleteArticleAction";
import CustomLoader from "../CustomLoader";
import AppLayout from "../layouts/AppLayout";

const ArticleList = () => {
  const articlesData = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deteleArticle(id));
  };

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <AppLayout>
      <CustomLoader loading={articlesData?.loading}>
      <List
        itemLayout="horizontal"
        dataSource={articlesData?.articles}
        renderItem={(item) => (
          <List.Item
            actions={[
              <button
                key="list-loadmore-edit"
                onClick={() => handleDelete(item?.id)}
              >
                Delete
              </button>
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href="https://ant.design">{item.first_name} {item.last_name}</a>}
                description={`Contact information - Email address: ${item.email} `}
              />
            </Skeleton>
          </List.Item>
        )}
      />
      </CustomLoader>
    </AppLayout>
  );
};

export default ArticleList;
