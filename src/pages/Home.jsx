import React from 'react'

const Home = () => {
  return (
    <>
        <div class="hero-content position-absolute top-50 start-50 translate-middle">
    <h1 class="text-warning">Where your journey begins.</h1>
    <p class="text-white">Discover your next great adventure, become an explorer to get started!</p>
  </div>
  <section class="bg-body-secondary py-5 text-center">
    <div class="container">
      <h2 class="fw-bold py-3">Welcome to Nepal wanders!</h2>
      <p>We manage and you travel easy – that’s the motto of our company. Connect with us and we will do the rest. The
        responsibility is huge and we are here to make sure even the miniscule is served without any reluctance.</p>
      <button class="btn btn-secondary rounded-pill p-3">LEARN MORE</button>
    </div>
  </section>

<div>
  <section className="py-5 text-center">
    <div className="container">
      <h2 className="fw-bold py-3">Wanders Signatures</h2>
      <p>Despite many destinations and trails, the best of Nepal among the good ones are selected here – on the basis of
        Popularity and the Most Wandered</p>
      <div className="row g-3">
        <div className="col-lg-8 ">
          <div className="tour">
            <img src="https://nepalwanders.com/wp-content/uploads/2023/08/mteverf-1.jpg" className="w-100" />
            <h4>Everest base camp trek</h4>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="tour">
            <img src="https://nepalwanders.com/wp-content/uploads/2023/08/Pokharabeauty-1.jpg" className="w-100" />
            <h4>Nepals Golden Triangle tour</h4>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="tour">
            <img src="https://nepalwanders.com/wp-content/uploads/2023/08/Untitleddolpo-1.jpg" className="w-100" />
            <h4>Upper dolpo trek</h4>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="tour">
            <img src="https://nepalwanders.com/wp-content/uploads/2023/08/manasluganesh-ght-wildlife-1-1.jpeg" className="w-100" />
            <h4>Manaslu trek</h4>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="tour">
            <img src="https://nepalwanders.com/wp-content/uploads/2023/08/choose-2560-1-1.jpg" className="w-100" />
            <h4>Everest High Passes Trek</h4>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="tour">
            <img src="https://nepalwanders.com/wp-content/uploads/2023/08/mardihimalannapurnanew-1.jpg" className="w-100" />
            <h4>Mardi Himal trek</h4>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="tour">
            <img src="https://nepalwanders.com/wp-content/uploads/2023/08/gauri-shanker-rolwaling-langtang-helambu-1.jpg" className="w-100" />
            <h4>Langtang valley trek</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-body-secondary py-5 text-center">
    <div className="container">
      <h2 className="fw-bold py-3">Why book on nepalwanders</h2>
      <ul className="nav nav-tabs mb-3 justify-content-center" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">THE COMPLETE EXPERIENCE</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">EDUCATION &amp;
            EXPERTISE</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">RESPONSIBILE TRAVEL</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="VALUE-tab" data-bs-toggle="tab" data-bs-target="#VALUE-tab-pane" type="button" role="tab" aria-controls="VALUE-tab-pane" aria-selected="false">VALUE</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
          <p>We understand that your trip is not a sum of transactions, however it is a complex collection of
            experiences that begin with your first inquiry. We learn about your interests and preferences so that we can
            craft an itinerary that you will love. Whether you’d like experiences centered around your passions such as
            cuisine, architecture, adventure, or a specific destination, we will ensure your trip is inspired by you.
            Moreover we will guide you through the entire process, from pre-travel advice on packing, vaccinations, and
            assistance with travel documents to a comfortable and stress-free return home, we work with you to design a
            seamless journey catered to your unique interests.
          </p>
        </div>
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
          <p>Travel is our passion and daily focus and we are continuously working to experience and encounter many of
            the resorts, activities and destinations that you are seeking. In addition to our vast first-hand travels,
            we stay up to date on the latest travel news, itineraries, trends, and policies through constant
            communication with our network, ongoing training and industry events. Our knowledge, relationships and
            expertise allow us to design exclusive experiences that you will treasure for a lifetime.</p>
        </div>
        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
          <p>Sustainable travelling is at the core of everything we do, which is why have policies in place to ensure
            destinations retain their natural character and cultural diversity. We develop our trips to help people
            become more culturally and environmentally aware. The aim is to give you big adventures while we maintain a
            small footprint!</p>
        </div>
        <div className="tab-pane fade" id="VALUE-tab-pane" role="tabpanel" aria-labelledby="VALUE-tab" tabIndex={0}>
          <p>We all want value for money. By negotiating contracted rates with the hotels, expert guides, activity
            providers and airlines we work with, we can keep our prices as competitive as possible. One thing we can
            offer that is truly priceless though is time – while we do all the heavy lifting, you can sit back safe in
            the knowledge that we will plan your perfect trip down to the smallest detail.</p>
        </div>
      </div>
    </div></section>
  <section className="squid position-relative">
    <div className="squid-content position-absolute top-50 start-50 translate-middle text-center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/YouTube_Diamond_Play_Button.png/1200px-YouTube_Diamond_Play_Button.png" className="play mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal" />
      <h2 className="text-white">Travelling Highlights</h2>
    </div>
    {/* ytlink modal */}
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <iframe width="100%" height={400} src="https://www.youtube.com/embed/SbAKYgfYET8" title="Mingle Game Song “Round and Round” Lyric Video | Squid Game: Season 2 | Netflix" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </div>
        </div>
      </div>
      {/* Modal end */}
    </div></section>
  <section className="py-5 text-center">
    <div className="container">
      <h2 className="mb-5">Professional Team</h2>
      <div className="row">
        <div className="col-lg-4">
          <img src="https://nepalwanders.com/wp-content/uploads/2023/08/1-1.jpg" className="rounded-circle" />
          <p className="py-4 fs-3">Tshering Wongdi Sherpa</p>
        </div>
        <div className="col-lg-4">
          <img src="https://nepalwanders.com/wp-content/uploads/2023/08/IMG_4245-1.jpg" className="rounded-circle" />
          <p className="py-4 fs-3">Gelbu Sherpa</p>
        </div>
        <div className="col-lg-4">
          <img className="rounded-circle" src="https://nepalwanders.com/wp-content/uploads/2023/08/2-1.jpg" />
          <p className="py-4 fs-3">Dawa Sherpa</p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-4 bg-dark text-white">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <ul className="text-center ">
            <li className="mb-2">Home</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Contact Us</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul className="text-center ">
            <li className="mb-2">All day every day:</li>
            <li className="mb-2" />info@nepalwanders.com
          </ul>
        </div>
        <div className="col-lg-3">
          <ul className="text-center ">
            <li className="mb-2">Saraswatinagar, Bouddha – 6, Kathmandu </li>
            <li className="mb-2">+977-9841708209,977-9841255236</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul className="text-center ">
            <li className="mb-2">fb</li>
            <li className="mb-2">insta</li>
            <li className="mb-2">linken</li>
          </ul>
        </div>
      </div>
    </div>
    <p className=" border-top text-center pt-4">©copyright | Nepalwanders 2023 .all right Reserved</p>
  </section>
</div>


    </>
  )
}

export default Home
