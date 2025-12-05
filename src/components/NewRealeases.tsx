import { useEffect, useState } from "react"

interface DeezerArtist {
  name: string
}

interface DeezerAlbum {
  cover_medium: string
}

interface DeezerTrack {
  id: number
  title: string
  artist: DeezerArtist
  album: DeezerAlbum
}

function NewReleasesSection() {
  const [tracks, setTracks] = useState<DeezerTrack[]>([])
  const [loading, setLoading] = useState(true)

  const getTracks = function () {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=rosevillain"
    )
      .then((res) => res.json())
      .then((data) => {
        setTracks(data.data.slice(0, 12))
        setLoading(false)
      })
      .catch((err) => {
        console.log("Errore fetch:", err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getTracks()
  }, [])

  return (
    <section className="mb-5">
      <div className="container-fluid px-2 px-md-0">
        {/* TITOLO */}
        <div className="d-flex align-items-center justify-content-start gap-2 mb-3">
          <h5 className="fw-bold mb-0">Nuove uscite</h5>
          <span className="text-secondary">›</span>
        </div>

        {/* GRIGLIA */}
        <div className="row g-3">
          {loading && <p className="text-secondary">Caricamento...</p>}

          {!loading &&
            tracks.map((track) => (
              <div key={track.id} className="col-6 col-md-4 col-lg-3">
                {/* COVER */}
                <div className="rounded-4 overflow-hidden mb-2">
                  <img
                    src={track.album.cover_medium}
                    className="img-fluid w-100"
                    alt={track.title}
                  />
                </div>

                {/* TESTI */}
                <div className="d-flex justify-content-between align-items-start">
                  <div className="pe-2">
                    <small className="text-white d-block text-truncate">
                      {track.title}
                    </small>
                    <small className="text-secondary d-block text-truncate">
                      {track.artist.name}
                    </small>
                  </div>

                  {/* BADGE ESPLICITO */}
                  <span
                    className="badge bg-secondary ms-2"
                    style={{ fontSize: "10px" }}
                  >
                    E
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default NewReleasesSection
