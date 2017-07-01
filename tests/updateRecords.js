const assert = require("assert");
const { updateRecords, collection } = require("../lib/updateRecords");

describe("#updateRecords()", () => {
  it("artists should be ABBA", () => {
    updateRecords(5439, "artist", "ABBA");
    assert.equal(collection[5439].artist, "ABBA");
  });

  it("tracks should have 'Take a Chance on Me' as the last element", () => {
    updateRecords(5439, "tracks", "Take a Chance on Me");
    assert.equal(collection[5439].tracks, "Take a Chance on Me");
  });

  it("artist should be not set", () => {
    updateRecords(2548, "artist", "");
    assert.equal(collection[2548].artist, undefined);
  });

  it("tracks should have 'Addicted to Love' as the last element", () => {
    updateRecords(1245, "tracks", "Addicted to Love");
    assert.equal(
      collection[1245].tracks[collection[1245].tracks.length - 1],
      "Addicted to Love"
    );
  });

  it("tracks should have '1999' as the first element", () => {
    updateRecords(2468, "tracks", "Free");
    assert.equal(collection[2468].tracks[0], "1999");
  });
});
