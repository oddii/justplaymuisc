import tw, { styled, css } from "twin.macro";
import Link from "next/link";
import Avatar from "../avatar";
import { GlassButton } from "../buttons";
import { IconPlay } from "../../styles/icons";
import { DarkModeTextColor } from "../../styles/colors";
import { CaptionText } from "../../styles/typography";

export interface AvatarCardProps {
  src: string;
  caption?: string;
  isShowButton?: boolean;
  isShowHover?: boolean;
  isShowShadow?: boolean;
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  src,
  caption,
  isShowButton = true,
  isShowHover = true,
  isShowShadow = false,
}) => {
  return (
    <Container>
      <Link href="/1">
        <CoverContainer isShowHover={isShowHover} isShowShadow={isShowShadow}>
          <Cover>
            <Avatar src={src} />
          </Cover>

          {isShowButton && (
            <GlassButtonContainer>
              <GlassButton>
                <IconPlay fill={DarkModeTextColor} />
              </GlassButton>
            </GlassButtonContainer>
          )}
        </CoverContainer>
      </Link>

      {caption && (
        <Link href="/2">
          <CaptionContainer>
            <Caption>{caption}</Caption>
          </CaptionContainer>
        </Link>
      )}
    </Container>
  );
};

export default AvatarCard;

const GlassButtonContainer = styled.div(() => [
  tw`absolute w-full h-full top-0 left-0 flex justify-center items-center transition invisible`,
]);

const Cover = styled.div(() => [
  tw`relative rounded-full`,
  css`
    width: 144px;
    height: 144px;
  `,
]);

const CoverContainer = styled.div(
  ({
    isShowHover,
    isShowShadow,
  }: {
    isShowHover: boolean;
    isShowShadow: boolean;
  }) => [
    tw`relative rounded-full transition`,
    isShowShadow && tw`shadow-xl`,
    isShowHover && [
      css`
        &:hover ${GlassButtonContainer} {
          ${tw`visible`}
        }

        &:hover {
          transform: scale(1.02);
        }
      `,
      tw`cursor-pointer hover:shadow-xl`,
    ],
  ]
);

const Container = styled.div(() => [
  tw`inline-block`,
  css`
    width: 144px;
  `,
]);

const BaseTextStyles = css`
  padding: 0 4px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CaptionContainer = styled(CaptionText)(() => [
  BaseTextStyles,
  tw`mt-2 px-1 text-center`,
]);

const Caption = styled(CaptionText)(() => [tw`hover:underline cursor-pointer`]);