import React from "react";
import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))
    if(articlesFromLocalStorage){
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({articleUrl: article.url});

    if(data?.summary){
      const newArticle = { ...article, summary: data.summary };

      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  };
  
  return (
    <section className="w-full mt-16 max-w-3/4">
      <div className="flex flex-col gap-2 w-full">
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center"
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-2 my-2 ml-2 w-5"
          />
          <input
            type="url"
            required
            onChange={(e) => {
              setArticle({
                ...article,
                url: e.target.value,
              });
            }}
            value={article.url}
            placeholder="Paste the URL"
            className="block w-full focus:w-full rounded-full border bg-orange-50/70 py-2.5 pl-10 pr-12 text-sm text-orange-600 shadow-lg peer font-satoshi font-medium border-orange-500 focus:outline-none"
          />
          <button
            type="submit"
            className="peer-focus:bg-orange-100 absolute right-0 mr-2 rounded-full w-8 hover:bg-orange-100 text-xl my-auto text-orange-600"
          >
            &crarr;
          </button>
        </form>
        {/* History Here */}
        <div className="flex flex-row gap-1 max-h-60 overflow-hidden">
            {allArticles.map((item, index) => (
              <div key={`link-${index}`} 
                  onClick={() => setArticle(item)} 
                  className="p-2 flex justify-start text-xs items-center flex-row bg-orange-50 hover:bg-orange-100 border border-gray-200 gap-3 rounded-lg cursor-pointer min-w-1/2">
                  <div className="flex w-full">
                    <p className="text-orange-500 text-md mr-2 my-auto">↻</p>
                    <p className="truncate">{item.url}</p>
                  </div>
              </div>
            ) )}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching? (
            <img src={loader} alt="loading_icon" className="w-20 h-20" />
          ) : error ? (
            <p className="font-inter font-bold text-black text-center">
              Well that wasnt supposed to happen... <br />
              <span className="font-satoshi font-normal text-gray-700">{error?.data?.error}</span>
            </p>
          ) : (
            article.summary && (
              <div>
                <h2 className="font-satoshi font-bold text-gray-600 text-xl mb-4">
                  Article <span className="font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Summary</span>
                </h2>
                <div className="rounded-xl border border-gray-200 bg-transparent p-4">
                  <p className="select-all justify-between items center flex font-inter font-medium text-sm text-gray-700">{article.summary}</p>
                </div>
              </div>
            )
          )}

      </div>
    </section>
  );
};

export default Demo;
