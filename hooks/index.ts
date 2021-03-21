export { useReady } from "./router";

export {
  useQueryAlbum,
  useAlbum,
  useQueryNewestAlbum,
  useNewestAlbum,
  useQueryNewAlbum,
  useNewAlbum,
} from "./album";

export type { AlbumNewArea } from "./album";

export {
  useQueryArtist,
  useArtist,
  useQueryArtistMV,
  useArtistMV,
  useQueryArtistAlbum,
  useArtistAlbum,
  useQueryArtistList,
  useArtistList,
  useQuerySimiArtist,
  useSimiArtist,
  useQueryTopArtists,
  useTopArtists,
} from "./artist";

export {
  useQueryPersonalizedPlaylist,
  usePersonalizedPlaylist,
  useQueryPlaylistDetail,
  usePlaylistDetail,
} from "./playlist";

export { useQueryToplist, useToplist } from "./ranking";

export {
  useQuerySearch,
  useSearchAlbums,
  useSearchArtists,
  useSearchMVs,
  useSearchPlaylists,
  useSearchSongs,
} from "./search";

export {
  useQuerySong,
  useSong,
  useQueryPersonalizedSong,
  usePersonalizedSong,
} from "./song";

export { useQueryPersonalizedMV, usePersonalizedMV } from "./mv";

export {
  useQueryUserSublist,
  useUserSublist,
  useQueryUserProfile,
  useUserProfile,
  useQueryUserPlaylist,
  useUserPlaylist,
} from "./user";
