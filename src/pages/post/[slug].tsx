/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <img src="/test.png" alt="imagem" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Algum titulo de exemplo</h1>
            <ul>
              <li>
                <FiCalendar />
                12 Mar 2021
              </li>
              <li>
                <FiUser />
                Cleiton Freitas
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>
          <article>
            <h2>Titulo Sessão</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              eaque ipsa quaerat, <strong>mollitia, ea debitis aliquam</strong>
              modi sit voluptate ex minus itaque rem omnis, optio enim aperiam.
              Nesciunt saepe cupiditate sunt est! Voluptatum sed dolor amet
              quasi aut cum soluta ad rem, quos nam molestiae
              <a href="#"> magnam nobis </a>. Unde sit ea incidunt quidem
              voluptate necessitatibus. Odio, illo laudantium quidem accusamus,
              ab fugit nisi quod aliquam molestiae cum placeat cupiditate iure,
              necessitatibus ratione incidunt excepturi qui saepe. A
              voluptatibus necessitatibus rerum maiores!
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
