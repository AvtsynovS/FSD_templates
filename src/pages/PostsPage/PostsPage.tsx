import { useEffect } from 'react';
import { FirstFeature } from '@featuries';
import { useAppDispatch, useAppSelector } from '@shared';
import { createPost, getPostById, getPosts } from './model/asyncThunks';

export const PostsPage = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(({ posts }) => posts.posts);
  const currentPost = useAppSelector(({ posts }) => posts.currentPost);

  const onCreatePost = () => {
    const post = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    dispatch(createPost(post));
  };

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getPostById(1));
  }, []);

  return (
    <>
      <div>FirstPage</div>
      <div>Порт: {process.env.REACT_APP_PORT}</div>
      <div>Версия: {process.env.npm_package_version}</div>
      <FirstFeature />
      <button onClick={onCreatePost}>Создать пост</button>
      <div>
        <h3>Посты</h3>
        {posts.map(({ id, title, body }) => {
          return (
            <div key={id}>
              <h4>{title}</h4>
              <div>{body}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
