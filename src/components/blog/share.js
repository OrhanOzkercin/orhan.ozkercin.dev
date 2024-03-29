import { Email, Linkedin, Telegram, Twitter, Whatsapp } from "@/assets/icons";
import {
  TelegramShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "next-share";

const ShareSocial = ({ slug, title }) => {
  const shareUrl = `https://orhan.ozkercin.dev/blog/posts/${slug}`;
  const quote = `Hey! I just read this awesome article by @orhanozkercin
 ${title}`;
  return (
    <div className="flex gap-3">
      <WhatsappShareButton url={shareUrl} title={quote}>
        <Whatsapp />
      </WhatsappShareButton>
      <TelegramShareButton url={shareUrl} title={quote}>
        <Telegram />
      </TelegramShareButton>
      <TwitterShareButton url={shareUrl} title={quote}>
        <Twitter size={16} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl}>
        <Linkedin />
      </LinkedinShareButton>
      <EmailShareButton url={shareUrl} subject={title} body={quote}>
        <Email />
      </EmailShareButton>
    </div>
  );
};

export default ShareSocial;
