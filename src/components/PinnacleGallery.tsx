"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PINNACLE_GALLERY } from "@/lib/site";

type GalleryPhoto = {
  event: (typeof PINNACLE_GALLERY)[number];
  photo: (typeof PINNACLE_GALLERY)[number]["photos"][number];
};

export function PinnacleGallery() {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    if (!activePhoto) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhoto]);

  return (
    <>
      <div className="pinnacle-gallery__events">
        {PINNACLE_GALLERY.map((event, eventIndex) => (
          <section
            className={`pinnacle-gallery__event pinnacle-gallery__event--${event.id}`}
            key={event.id}
          >
            <header className="pinnacle-gallery__event-header">
              <span aria-hidden="true">0{eventIndex + 1}</span>
              <div>
                <p>{event.code}</p>
                <h3>{event.title}</h3>
              </div>
              <p>
                {event.location}
                <span>{event.date}</span>
              </p>
            </header>
            <div className="pinnacle-gallery__collage">
              {event.photos.map((photo, photoIndex) => (
                <button
                  className={`pinnacle-gallery__tile pinnacle-gallery__tile--${photo.orientation}`}
                  type="button"
                  key={photo.src}
                  aria-label={`Open ${photo.caption} in the photo viewer`}
                  onClick={() => setActivePhoto({ event, photo })}
                  onContextMenu={(event) => event.preventDefault()}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 720px) 100vw, 25vw"
                  />
                  <span className="sr-only">Photo {photoIndex + 1}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {activePhoto ? (
        <div
          className="pinnacle-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pinnacle-lightbox-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setActivePhoto(null);
            }
          }}
        >
          <div className="pinnacle-lightbox__panel">
            <button
              className="pinnacle-lightbox__close"
              type="button"
              onClick={() => setActivePhoto(null)}
            >
              Close
            </button>
            <div
              className="pinnacle-lightbox__image"
              onContextMenu={(event) => event.preventDefault()}
            >
              <Image
                src={activePhoto.photo.src}
                alt={activePhoto.photo.alt}
                fill
                sizes="(max-width: 720px) 94vw, 82vw"
                priority
              />
            </div>
            <div className="pinnacle-lightbox__caption">
              <p>
                {activePhoto.event.code} / {activePhoto.event.location}
              </p>
              <p id="pinnacle-lightbox-title">{activePhoto.photo.caption}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
