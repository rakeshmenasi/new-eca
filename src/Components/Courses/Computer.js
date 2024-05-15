import React from 'react';
import Records from "../Details.json";

export default function Computer() {
  return (
    <div>
      <div>
      {Records &&
        Records.map((record, i) => {
          return (
            <div key={record.title}>
              {record &&
                record.details.map((data, i) => {
                  if (data.title === "Computer-Science")
                    return (
                      <div key={i}>
                        <section class="dark">
                          <div class="container py-4">
                            <h1 class="h1 text-center" id="pageHeaderTitle">
                              {data.name}
                            </h1>
                            <article class="postcard dark blue">
                              <a class="postcard__img_link" href="#">
                                <img
                                  class="postcard__img"
                                  src="https://picsum.photos/1000/1000"
                                  alt="Image Title"
                                />
                              </a>
                              <div class="postcard__text">
                                <h1 class="postcard__title blue">
                                  <a href="#">{data.name}</a>
                                </h1>
                                <div class="postcard__subtitle small">
                                  <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon,
                                    May 25th 2020
                                  </time>
                                </div>
                                <div class="postcard__bar"></div>
                                <div class="postcard__preview-txt">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Eligendi, fugiat asperiores
                                  inventore beatae accusamus odit minima enim,
                                  commodi quia, doloribus eius! Ducimus nemo
                                  accusantium maiores velit corrupti tempora
                                  reiciendis molestiae repellat vero. Eveniet
                                  ipsam adipisci illo iusto quibusdam, sunt
                                  neque nulla unde ipsum dolores nobis enim
                                  quidem excepturi, illum quos!
                                </div>
                                <ul class="postcard__tagbox">
                                  <li class="tag__item">
                                    <i class="fas fa-tag mr-2"></i>Duration :{" "}
                                    {data.duration}
                                  </li>
                                  <li class="tag__item">
                                    <i class="fas fa-clock mr-2"></i>Fees :{" "}
                                    {data.fees}
                                  </li>
                                  <li class="tag__item play blue">
                                    <a href="#">
                                      <i class="fas fa-play mr-2"></i>Play
                                      Episode
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </article>
                          </div>
                        </section>
                      </div>
                    );
                })}
            </div>
          );
        })}
    </div>
    </div>
  )
}
