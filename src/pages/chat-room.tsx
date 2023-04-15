import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Configuration, OpenAIApi } from 'openai';

export const getServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  const configuration = new Configuration({
    organization: 'org-984ygV87ZSpNwE6xBGJz2Yrr',
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const response = await openai.listEngines();

  console.log(response);

  return {
    props: {}, // will be passed to the page component as props
  };
};

const ChatRoom = () => {
  return (
    <div>
      <h1>CHAT ROOM</h1>
    </div>
  );
};

export default ChatRoom;
