const EventsPage = (props) => {
  const { title } = props;
  return (
    <div>
      <h1>Event EventsPage</h1>
      <div>
        <a href=""><img /><h2>Event in London</h2></a>
        <a href=""><img /><h2>Event in Madrid</h2></a>
        <a href=""><img /><h2>Event in Paris</h2></a>
      </div>
    </div>
  )
}
export default EventsPage;

export function getServerSideProps() {
  return {
    props: {
      title: "Hello every one!",

    }
  }
}