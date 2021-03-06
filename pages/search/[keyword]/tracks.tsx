import React, { useState, useEffect } from "react";
import tw, { styled, css } from "twin.macro";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { TitleBoard } from "../../../components/boards";
import { PlaylistItemCard } from "../../../components/cards";
import {
  PlaylistItemsLoadingContainer,
  ViewMoreCommonContainer,
} from "../../../components/containers";
import { useSearchSongs } from "../../../hooks";

export interface SearchKeywordTracksProps {}

const SearchKeywordTracks: React.FC<SearchKeywordTracksProps> = () => {
  const { t } = useTranslation("search");
  const { query } = useRouter();

  const { searchSongsRes, isLoading } = useSearchSongs({
    keywords: query.keyword as string,
  });

  return (
    <Container>
      <ViewMoreCommonContainer
        titleBoard={
          <TitleBoard
            type="search"
            title={query.keyword}
            searchPrevText={t("search-type-track")}
          />
        }
        cols={1}
        mdCols={1}
        gap={0}
        lgGap={0}
        isShowLoadMore={searchSongsRes?.hasMore}
        footer={
          (isLoading || !searchSongsRes) && (
            <PlaylistItemsLoadingContainer rows={16} />
          )
        }
      >
        {searchSongsRes?.songs &&
          searchSongsRes?.songs?.map((song, index) => (
            <PlaylistItemCard
              key={song.id}
              itemType={
                index === 0 ? "active" : index === 3 ? "disabled" : "default"
              }
              coverPath={song.al.picUrl + "?param=100y100"}
              index={index + 1}
              name={song.name}
              artists={song.ar}
              album={song.al.name}
              albumId={song.al.id}
              duration={song.dt}
              isLike={false}
            />
          ))}
      </ViewMoreCommonContainer>
    </Container>
  );
};

export default SearchKeywordTracks;

const Container = styled.div(() => []);
