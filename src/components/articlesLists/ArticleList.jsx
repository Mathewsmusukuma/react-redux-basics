import { List, Avatar, Skeleton } from "antd";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteArticle, fetchArticles } from "../../stateManger/actions/articlesListAction";
import CustomLoader from "../CustomLoader";
import AppLayout from "../layouts/AppLayout";

const ArticleList = () => {
  const articlesData = useSelector((state) => state.articlesList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteArticle({ id: id }));
  };

  useEffect(() => {
    dispatch(fetchArticles())
    console.log(articlesData.articles);
  }, [dispatch])

  return (
    <AppLayout>
      <CustomLoader loading={articlesData?.loading} />
      <List
        itemLayout="horizontal"
        dataSource={articlesData?.articles}
        renderItem={(item) => (
          <List.Item
            actions={[
              <button
                key="list-loadmore-edit"
                onClick={() => handleDelete(item)}
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
    </AppLayout>
  );
};

export default ArticleList;
