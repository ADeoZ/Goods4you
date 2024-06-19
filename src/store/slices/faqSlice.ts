import { FaqItem } from "@/models";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: { list: FaqItem[] } = {
  list: [
    {
      id: "asd901d10890asdj10du10dwjjasd",
      question: "Question 1",
      answer: "Long answer to the first question",
    },
    {
      id: "932jf02f0ka09d01jd0f0829uejfj",
      question: "Question 2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat cursus. Donec et lacus vel turpis vestibulum dictum in in libero. Quisque ut nulla suscipit, pharetra leo vel, elementum augue. Pellentesque quis placerat est. Nulla facilisi. Donec ultricies porttitor diam eget pretium. Donec fermentum vitae lectus at porta. Suspendisse ex arcu, tempor nec lacinia vitae, luctus vel augue. Curabitur eu varius justo, vitae volutpat ligula.",
    },
  ],
};

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
});

export const selectFaqList = (state: RootState) => state.faq.list;
