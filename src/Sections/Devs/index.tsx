import { Section } from "@common/section";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";
import { data, TData } from "~/Sections/Devs/data";
import code from "~/images/code.png";
import { CollectChatgptIntegrations } from "~/Sections/Devs/collect-chatgpt-integrations";
import { ChatgptInput } from "~/Sections/Devs/chatgpt-input";
const DevsFeatureBlock = ({ text, title, code, image }: TData) => {
  return (
    <div className="grid grid-cols-3 gap-16content-center items-center max-w-4xl">
      <div className="hidden md:block w-[200px]">
        <Image src={image} alt={title} />
      </div>
      <div className="col-span-2 md:col-span-3">
        <h2 className="text-2xl sm:text-base font-bold mb-8 text-content-primary-dark">
          {title}
        </h2>
        <h4 className="text-base sm:text-sm font-medium text-content-secondary-dark">
          {text}
        </h4>

        <SyntaxHighlighter language="javascript" style={materialOceanic}>
          {code}
        </SyntaxHighlighter>
      </div>
      <div className="justify-self-end md:hidden">
        <Image src={image} alt={title} />
      </div>
    </div>
  );
};

const UserRepositoryCode = `
// AI Generated
const UserRepository = CollectSDK.register('User', [
  {
    name: "Name",
    type: "string",
    required: true
  },
  {
    name: "Age",
    type: "number"
  },
  {
    name: "Gender",
    type: "string",
    required: true
  },
  {
    name: "Bio",
    type: "string"
  },
  {
    name: "Location",
    type: "geo",
    required: true
  },
  {
    name: "Picture",
    type: "file"
    max: "5mb",
    extensions: ["jpg", "png", "jpeg", "webp"]
  }
])
`;

const SwipeRepositoryCode = `
// AI Generated
const SwipeRepository = CollectSDK.register('Swipe', [
  {
    name: "UserID",
    type: "string"
  },
  {
    name: "DateSwiped",
    type: "date-time"
  },
  {
    name: "SwipeDirection",
    type: "string" // "right" or "left"
  }
])
`;

const ResultUsageCode = `
// Just push it to the storage ✨
const user = await UserRepository.save({
  Name: "Liza Klasvitzh",
  Gender: "female",
  Location: "50.0508,14.3534"
})

const swipe = await SwipeRepository.save({
  UserID: "2138918", 
  SwipeDirection: "right",
  DateSwiped: "2023-03-31T08:51:40Z"
})

await CollectSDK.link(
  user,
  swipe, 
  { metadata: "some additional info" }
)
`;

export function DevsSection() {
  return (
    <Section
      className="min-h-screen mt-[70px] md:mt-[60px] grid place-content-center"
      data-theme="dark"
    >
      <div className="container grid gap-[160px] py-[160px]">
        <div className="basis-1/1 text-center items-center flex flex-col">
          <Image src={code} alt={"Developers Benefits"} />

          <h2 className="text-3xl sm:text-xl font-bold mb-8 text-content-primary-dark md:text-2xl">
            Batteries included
          </h2>
          <h4 className="text-xl sm:text-base font-medium text-content-secondary-dark">
            Seamless developer experience and streamlined workflow{" "}
            <br className="sm:hidden" /> enables your team focus on features,
            not on tech debt and bugs.
          </h4>
        </div>
        <div className="grid place-content-center gap-[160px]">
          {data.map(DevsFeatureBlock)}
        </div>

        <h2 className="text-3xl sm:text-xl font-bold text-content-primary-dark md:text-2xl text-center py-[20vh]">
          ...And last but not least
        </h2>

        <div className="text-center flex flex-col items-center">
          <CollectChatgptIntegrations />
          <h2 className="text-2xl sm:text-base font-bold mb-8 mt-8 text-content-primary-dark">
            ChatGPT integration
          </h2>
          <p className="text-base sm:text-sm font-medium text-content-secondary-dark mb-8">
            Bypass the boring part. Just type your application idea:
          </p>
          <ChatgptInput />
          <p className="text-base sm:text-sm font-medium text-content-secondary-dark mb-8 mt-8">
            And Collect API with ChatGPT utilize all the work
          </p>
          <div className="grid grid-cols-2 md:grid-cols-1">
            <SyntaxHighlighter language="javascript" style={materialOceanic}>
              {UserRepositoryCode}
            </SyntaxHighlighter>
            <SyntaxHighlighter language="javascript" style={materialOceanic}>
              {SwipeRepositoryCode}
            </SyntaxHighlighter>
          </div>
          <p className="text-base sm:text-sm font-medium text-content-secondary-dark">
            Then you just use the result to create your app
          </p>
          <SyntaxHighlighter language="javascript" style={materialOceanic}>
            {ResultUsageCode}
          </SyntaxHighlighter>
          <p className="text-base sm:text-sm font-medium text-content-secondary-dark">
            Simple as that :)
          </p>
        </div>
      </div>
    </Section>
  );
}
