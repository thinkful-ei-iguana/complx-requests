const API_KEY = "&api_key=wS90AN3ZMmmJsmsE4YiQoinn5g0ILLJ7IRBmYotI";
const ENTRY_POINT = "https://developer.nps.gov/api/v1";

const handleSearchResults = result => {
  console.log(result);
};

const searchApi = params => {
  fetch(
    `${ENTRY_POINT}/parks?stateCode=${params.stateCode}&limit=${
      params.resultCount
    }${API_KEY}`
  )
    .then(result => result.json())
    .then(resp => handleSearchResults(resp));
};

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  const search = {
    stateCode: stateCode.value,
    resultCount: resultCount.value
  };

  if (search.stateCode.length == 0 || resultCount < 1)
    throw new Error("invalid search parameters");

  searchApi(search);

  console.log("search params", search);
});

console.log("hello");
