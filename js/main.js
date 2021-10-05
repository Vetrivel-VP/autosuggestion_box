const searchInput = document.querySelector(".search_input");
const inputBox = searchInput.querySelector("input");
const suggBox = searchInput.querySelector(".suggesstion_box");
const searchIcon = searchInput.querySelector(".search_icon");

// Load all the suggestion into suggestions.js

// lets trigger the Onkeyup event when the user press the key
// this event triggers the functions

inputBox.onkeyup = (e) => {
  let userdata = e.target.value;
  let emptyArray = [];

  if (userdata) {
    //   filter function return an new array
    //  we are converting everything from array and user entered value
    // into lowercase so that we can fetch the value that matching the
    // start character
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());
    });

    emptyArray = emptyArray.map((data) => {
      return (data = `<li><a> ${data} </a></li>`);
    });

    // lets make the suggestion box active now
    searchInput.classList.add("active");

    // Now lets load the dynamic suggestions
    // We dont need the default li tags anymore

    showSuggestions(emptyArray);

    // lets add the listener event for all li tags

    let allList = suggBox.querySelectorAll("li");

    allList.forEach((list) => {
      list.setAttribute("onclick", "selectData(this)");
    });
  } else {
    searchInput.classList.remove("active");
  }
};

const selectData = (element) => {
  let selectedData = element.textContent;
  inputBox.value = selectedData;

  //   lets add the hyperlink for the anchor tag

  let linkTag = element.querySelector("a");
  searchIcon.onclick = () => {
    const webLink = `https://www.google.com/search?q=${selectedData}`;
    linkTag.setAttribute("href", webLink);
    linkTag.click();
  };

  searchInput.classList.remove("active");
};

const showSuggestions = (dataList) => {
  let listData;
  if (!dataList.length) {
    let userValue = inputBox.value;
    // this is to type the user value in the li tag
    // if you failed to do it , it will show an error as undefined
    listData = `<li><a> ${userValue} </a></li>`;
  } else {
    listData = dataList.join("");
  }

  suggBox.innerHTML = listData;
};
