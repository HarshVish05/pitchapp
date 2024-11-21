import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams }) {
  // console.log('home');
  const query = (await searchParams).query

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: { _id: 1, name: 'Harsh' },
    _id: 1,
    description: 'This is a post.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/bf884e32337667.567b1cb1182d4.jpg',
    category: 'Robots',
    title: 'We Robots'
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br />Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competition</p>
        <SearchForm query= {query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          { query ? `Search results for ${query}` : "All startups" }
        </p>

        <ul className="mt-7 card_grid">
            { posts?.length > 0 ? (
              posts.map(( post, index )=> <StartupCard key={post._id} post={post}  />)
              ) : (<p className= 'no-results'>No startups found</p>) }
          </ul>
      </section>
    </>
  );
}
