import Layout from '../components/layout';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Button, Stack } from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';
import axiosInstance from '../utils/axios';
import { queryType } from '../models/models';

type Interchange = {
  owner: boolean;
  text: string;
};

type FlowItem = {
  text: string;
  type: queryType;
  icon?: string;
  disabled?: boolean;
};

const Assistant = () => {
  const [interchanges] = useState<Interchange[]>([
    {
      owner: false,
      text: 'What is your name?',
    }
  ]);

  const [stage, setStage] = useState<number>(0);
  const [stageValue, setStageValue] = useState<string>('');
  const [showStage, setShowStage] = useState<boolean>(false);

  const map = new Map<number, FlowItem[]>([
    [0, [
      {
        text: 'Share symptoms',
        type: 'symptom',
        icon: '🏥',
        disabled: false
      },
      {
        text: 'Share diagnosis',
        type: 'diagnosis',
        icon: '🫶',
        disabled: true,
      },
    ]],
    [1, [
      {
        'text': 'Upload image',
        'type': 'image',
        icon: '🩻',
      },
      {
        text: 'Share diagnosis',
        type: 'diagnosis',
        icon: '🫶',
      },
    ]],
  ]);

  const [userQuestion, setUserQuestion] = useState('')
  const [interchange, setInterchange] = useState<Interchange[]>([]);
  const [allow, setAllow] = useState(false);

  const transformInterchanges = (interchanges: Interchange[], initial = false) => {
    let initialText = initial ? `<b>Welcome to my page, glad to have you here 🥰</b> <br/>` : '';
    initialText += 'What\'s bothering you?';

    return initialText
  }

  const showBotTyping = async (setInterchange: Function, prevState: any, setAllow: Function) => {
    scrollDown()
    await new Promise(resolve => setTimeout(resolve, 1000));
    setInterchange([...prevState, {
      owner: false,
      text: 'Bot Assistant is typing.'
    }])
    scrollDown()

    await new Promise(resolve => setTimeout(resolve, 1000));
    setInterchange([...prevState, {
      owner: false,
      text: 'Bot Assistant is typing..'
    }])
    scrollDown()

    await new Promise(resolve => setTimeout(resolve, 1000));
    setInterchange([...prevState, {
      owner: false,
      text: 'Bot Assistant is typing...'
    }])
    scrollDown()

    await new Promise(resolve => setTimeout(resolve, 1000));
    setAllow(true)
    scrollDown()

  }

  const createMarkup = (text: string) => {
    return { __html: text };
  }

  const userQuestionHandler = (e: FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setAllow(false);
      return;
    }
    setUserQuestion(e.currentTarget.value);
    setAllow(true);
  };

  const scrollDown = () => {
    // @ts-ignore
    document.getElementById('scrollTo').scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const getBotAnswer = async (interchanges: Interchange[], setInterchange: any, question: string, prevState: any, setAllow: any) => {
    await showBotTyping(setInterchange, prevState, setAllow);

    switch(question){
      case 'Share symptoms':
        setStage(1);
        setInterchange([...prevState, {
          owner: false,
          text: 'Please share your symptoms and how you are feeling. It will help us understand exactly what\'s going on.'
        }]);
        break;
      default:
        const response = await axiosInstance.get(`api/openai?q=${question}&lang=English&type=symptom`);
        setInterchange([...prevState, {
          owner: false,
          text: response.data
        }]);
        setShowStage(true);
        setStage(stage + 1);
        break;
    }

    scrollDown();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(12);
    console.log(`12 ${userQuestion}`);
    if (!userQuestion) return;
    console.log(1);
    const uQ = userQuestion;
    const newInterchange = [...interchange, {
      owner: true,
      text: userQuestion
    }]

    setInterchange(newInterchange);
    setUserQuestion('');
    await getBotAnswer(interchanges, setInterchange, uQ, newInterchange, setAllow);
  };

  useEffect(() => {
    showBotTyping(setInterchange, [], setAllow).then(() => {
      setInterchange([{
        owner: false,
        text: transformInterchanges(interchanges, true)
      }]);
      setShowStage(true);
    });
  }, [interchanges]);

  const onSupportButtonClick = async (e: any) => {
    setUserQuestion(e.target.value);
    const newInterchange = [...interchange, {
      owner: true,
      text: e.target.value
    }]
    setShowStage(false);
    setStageValue(e.target.value);
    setInterchange(newInterchange);
    setUserQuestion('');
    await getBotAnswer(interchanges, setInterchange, e.target.value, newInterchange, setAllow);
  };

  const getStageItems = (stage: number) => {
    return (
      map.get(stage)?.map((e, i) => (
       /* <button type="button" onClick={onSupportButtonClick}  value={e.text} key={i}
                className="ml-1 text-gray-800 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-200 dark:hover:bg-blue-400 dark:focus:ring-blue-800">{`${e.icon} ${e.text}`}</button>
*/        <Button disabled={e.disabled} style={{ marginTop: '3px', marginLeft: '6px', marginBottom:'3px', maxWidth:'140px' }} onClick={onSupportButtonClick} value={e.text} key={i}
                rounded={12} variant='outline' colorScheme='teal' size='sm' textColor={'white'}>
          {`${e.icon} ${e.text}`}
        </Button>
      ))
    )
  };

  return (
    <Layout >
      <div className="flex flex-col items-center justify-center pt-2 rounded-2xl">
        <form className="flex flex-col w-full flex-1 rounded-2xl" onSubmit={handleSubmit}>
          <div className="flex flex-col border-2  overflow-scroll p-2 w-full rounded-2xl" style={{ height: "80vh" }}>
            {interchange.map((chat, i) => (
              chat.owner ?
                <div key={i} className="user flex flex-row my-2 w-full p-2 rounded-2xl ">
                  <span className="w-2/3"></span>
                  <span className="w-/3 p-2 rounded bg-blue-500 rounded-2xl text-white">
                 {chat.text}
                </span>
                </div>
                :
                <div key={i} className="bot my-2 bg-gray-100 w-1/2 lg:w-1/3  p-2 rounded-2xl">
                  <span dangerouslySetInnerHTML={createMarkup(chat.text)}/>
                </div>
            ))}
            {showStage ?
                <div key={1} className="user flex flex-row my-2 w-full p-2">
                    <span className="w-2/3"></span>
                    <span className="w-1/2 lg:w-1/3 p-2 pl-0 rounded-2xl bg-blue-500">
                 {getStageItems(stage)}
                </span>
                </div> : <></>
            }
            <div id="scrollTo"></div>
          </div>
          {/*<Stack sx={{ marginTop: '5px', marginBottom: '5px' }} spacing={4} direction='row-reverse' align='center'>
            {getStageItems(stage)}
          </Stack>*/}
          <InputGroup size='lg'>
            <Input
              pr='4.5rem'
              type={'text'}
              placeholder='Message'
              value={userQuestion}
              onChange={userQuestionHandler}
            />
            <InputRightElement width='4.5rem'>
              <Button h='2rem' size='md' type="submit" className="mr-2">
                Send
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </div>
    </Layout>
  );
};

export default Assistant;