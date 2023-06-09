import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const newMeetupPage = () => {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default newMeetupPage;
