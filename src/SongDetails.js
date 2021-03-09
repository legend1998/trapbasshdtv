import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";

function SongDetails({ close }) {
  const closetab = () => {
    close(false);
  };

  return (
    <div className="song-detail-container " id="song-detail-container">
      <div className="song-detail text-left">
        <CancelIcon className="cancelbutton" onClick={closetab} />

        <p>Add Details</p>
        <div>
          <p className="text-muted">
            Track version <span className="required-span">*</span>
          </p>
          <div className="d-flex">
            <label htmlFor="">
              <input type="radio" name="track-version" value="original" />
              <span>Original</span>
            </label>
            <label htmlFor="">
              <input type="radio" name="track-version" value="karaoke" />
              <span>karaoke</span>
            </label>
            <label htmlFor="">
              <input type="radio" name="track-version" value="medley" />
              <span>medley</span>
            </label>
            <label htmlFor="">
              <input type="radio" name="track-version" value="Cover" />
              <span>Cover</span>
            </label>
          </div>
        </div>
        <div>
          <p className="text-muted">
            Title <span className="required-span">*</span>
          </p>
          <input type="text" placeholder="title " />
        </div>
        <div>
          <p className="text-muted">Version/Subtitle</p>
          <input type="text" placeholder="title " />
        </div>
        <div>
          <p className="text-muted">
            Primary Artist<span className="required-span">*</span>
          </p>
          <div className="d-flex">
            <select name="primaryArtist" id="" className="form-control">
              <option value="default">Default</option>
            </select>
            <button className="btn btn-primary">+</button>
          </div>
        </div>
        <div>
          <p className="text-muted">Featuring Artist</p>
          <div className="d-flex">
            <select name="featuringartist" id="" className="form-control">
              <option value="default">Default</option>
            </select>
            <button className="btn btn-primary">+</button>
          </div>
        </div>
        <div>
          <p className="text-muted">
            Auther <span className="required-span">*</span>
          </p>
          <input type="text" placeholder="Auther " />
          <button className="btn btn-primary">Add</button>
        </div>
        <div>
          <p className="text-muted">
            Composer <span className="required-span">*</span>
          </p>
          <input type="text" placeholder="composer " />
          <button className="btn btn-primary">Add</button>
        </div>
        <div>
          <p className="text-muted">
            Producer <span className="required-span">*</span>
          </p>
          <input type="text" placeholder="Producer " />
        </div>
        <div>
          <p className="text-muted">
            Line <span className="required-span">*</span>
          </p>
          <input type="text" placeholder="line " />
        </div>

        <div>
          <p className="text-muted">
            Production year <span className="required-span">*</span>
          </p>
          <input type="text" placeholder="production year " />
        </div>

        <div>
          <p className="text-muted">
            publisher <span className="required-span">*</span>
          </p>
          <input type="text" placeholder="publisher" />
        </div>
        <div>
          <p className="text-muted">
            Have your own ISRC <span className="required-span">*</span>
          </p>
          <div className="d-flex">
            <label htmlFor="">
              <input type="radio" name="isrc" id="" /> Yes
            </label>
            <label htmlFor="">
              <input type="radio" name="isrc" id="" /> No
            </label>
          </div>
        </div>
        <div>
          <p className="text-muted">
            Genre <span className="required-span">*</span>
          </p>
          <select name="" id="">
            <option value="default"></option>
          </select>
        </div>
        <div>
          <p className="text-muted">
            Sub-Genre <span className="required-span">*</span>
          </p>
          <select name="" id="">
            <option value="default"></option>
          </select>
        </div>
        <div>
          <p className="text-muted">
            Price-Tier <span className="required-span">*</span>
          </p>
          <select name="" id="">
            <option value="default"></option>
          </select>
        </div>
        <div>
          <p className="text-muted">
            Explicit Version <span className="required-span">*</span>
          </p>
          <div className="d-flex">
            <label htmlFor="">
              <input type="radio" name="isrc" id="" /> Yes
            </label>
            <label htmlFor="">
              <input type="radio" name="isrc" id="" /> No
            </label>
            <label htmlFor="">
              <input type="radio" name="isrc" id="" /> Cleaned
            </label>
          </div>
        </div>
        <div>
          <p className="text-muted">
            Track Title Language <span className="required-span">*</span>
          </p>
          <select name="" id="">
            <option value="default"></option>
          </select>
        </div>
        <div>
          <p className="text-muted">
            Lyric language <span className="required-span">*</span>
          </p>
          <select name="" id="">
            <option value="default"></option>
          </select>
        </div>
        <div>
          <p className="text-muted">
            Lyrics<span className="required-span">*</span>
          </p>
          <input type="text" placeholder="Lyrics" />
        </div>
        <div>
          <p className="text-muted">
            Caller Tune Timing<span className="required-span">*</span>
          </p>
          <input type="text" placeholder="HH:MM:SS" />
        </div>
        <div>
          <p className="text-muted">
            want to distribute music video?{" "}
            <span className="required-span">*</span>
          </p>
          <div className="d-flex">
            <label htmlFor="">
              <input type="radio" name="isrc" id="" /> Yes
            </label>
            <label htmlFor="">
              <input type="radio" name="isrc" id="" /> No
            </label>
          </div>
        </div>
        <div className="d-flex">
          <button className="btn btn-outline-primary">Save</button>
          <button className="btn btn-outline-danger">Close</button>
        </div>
      </div>
    </div>
  );
}

export default SongDetails;
