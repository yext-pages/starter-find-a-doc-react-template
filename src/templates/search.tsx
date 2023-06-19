// src/templates/search.tsx

import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  useSearchActions,
  provideHeadless,
  HeadlessConfig,
} from "@yext/search-headless-react";
import {
  ApplyFiltersButton,
  SearchBar,
  StandardCard,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
  FilterSearch,
  OnSelectParams,
} from "@yext/search-ui-react";
import ProviderCard from "../components/ExampleProviderCard";
import Results from "../components/Results";

export const getPath: GetPath<TemplateProps> = () => {
  return "search";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Find a Doctor",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const headlessConfig: HeadlessConfig = {
  apiKey: "95fc01a43a1e1c046aec8d9329b86cab",
  experienceKey: "find-a-doctor",
  locale: "en",
  verticalKey: "providers",
};

const searcher = provideHeadless(headlessConfig);

const Search: Template<TemplateRenderProps> = () => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <Results />
    </SearchHeadlessProvider>
  );
};

export default Search;
