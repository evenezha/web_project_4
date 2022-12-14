export const editProfileOpenBtn = document.querySelector(".profile__edit-btn");
export const profileNameInput = document.querySelector(".profile__edit-name");
export const profileAboutInput = document.querySelector(".profile__about-me");
export const popupProfileName = document.querySelector(".js-input-type-profile-name");
export const popupProfileIconsTitle = document.querySelector(".js-input-type-profile-about-me");
export const profilePicSelector = ".profile__image";
export const submitProfileEdit = document.querySelector(".popup__edit-form");
/* -------------------------------- add place ------------------------------- */
export const addPlacesOpenBtn = document.querySelector(".profile__add-places-btn");
export const popupPlaceName = document.querySelector(".js-input-type-place-name");
export const popupPlaceUrl = document.querySelector(".js-input-type-place-url");
export const submitNewPlace = document.querySelector(".popup__place-form");
/*------------------------------ edit profile pic---------------------------------------*/
export const editProfilePicButton = document.querySelector(".profile__image-edit-btn");
export const submitNewProfilePic = document.querySelector(".popup__edit-profile-pic-form");
/* ----------------------------- Generate Cards ----------------------------- */
export const placeList = document.querySelector(".cards__list");
/* ------------------------------ image preview ----------------------------- */

export const addPopupSelector = "#add-place-popup";
export const editPopupSelector = "#edit__profile";
export const profileName = ".profile__edit-name";
export const profileJob = ".profile__about-me";

// Place Cards
export const initialCards = [
  {
    name: "Reaching for the Moon",
    link: "https://i.pinimg.com/564x/88/9b/36/889b3607b2b93430b40d7f03ae918e8d.jpg",
  },
  {
    name: "Portrait of Barbara of Portugal",
    link: "https://i.pinimg.com/564x/8a/a0/70/8aa07053178cb1bbb4a3f93379d750d2.jpg",
  },
  {
    name: "Simerenya",
    link: "https://i.pinimg.com/564x/46/66/30/46663050e388550bf24b80861796271e.jpg",
  },
  {
    name: "Cupid and Psyche",
    link: "https://i.pinimg.com/564x/16/e2/8b/16e28bbb488085cf5df69f62c07791cb.jpg",
  },
  {
    name: "Street in the Evening, Prague",
    link: "https://i.pinimg.com/564x/fe/85/3b/fe853b12ee5290a4b0967ec6e20de782.jpg",
  },
  {
    name: "Girl at the Piano",
    link: "https://i.pinimg.com/564x/d7/0b/53/d70b534791f50f62e741669aecd7a479.jpg",
  },
  {
    name: "Going Home",
    link: "https://i.pinimg.com/564x/ad/53/2b/ad532b31bbfcd006c6b8f33a9b4cebf3.jpg",
  },
  {
    name: "Rainy Night",
    link: "https://i.pinimg.com/564x/1a/50/32/1a50321b905b5ddd60b2802c1b50ad4b.jpg",
  },
  {
    name: "The Spreading Tree",
    link: "https://i.pinimg.com/564x/d6/b2/f9/d6b2f9465797c4adec5fca641a1dd2d8.jpg",
  },
];

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input-type-error",
  errorClass: "popup__error_visible"
};


