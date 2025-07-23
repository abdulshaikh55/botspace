import { Box, Avatar, Typography, IconButton } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import reelsIcon from './../assets/reelsIcon.svg';
import CommentsSection from './CommentsSection';
import DMPage from "./DMPage";

interface MobileProps {
  src: string;
  descr: string;
  likes: number;
  comments: number;
  commentsList?: string[];
  showDM: boolean;
  firstDMMessage: string;
  linkButtonDMText: string;
  mainDMMessage: string;
}

const userAvatar = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80";
const username = "botspacehq";

const Mobile = ({
  src,
  descr,
  likes,
  comments,
  commentsList = [],
  showDM,
  firstDMMessage,
  linkButtonDMText,
  mainDMMessage
}: MobileProps) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 620,
        border: '8px solid #111',
        borderRadius: '32px',
        boxShadow: 3,
        overflow: 'hidden',
        bgcolor: '#181818',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 8,
          bgcolor: '#333',
          borderRadius: 8,
          position: 'absolute',
          top: 12,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          opacity: 0.7,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          mt: '32px',
          px: 1.5,
          height: 40,
        }}
      >
        <IconButton sx={{ mr: 1, color: "#fff" }}>
          <ChevronLeftIcon sx={{ mr: 1, color: "#fff" }} />
        </IconButton>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
            pointerEvents: 'none',
          }}
        >
          <Typography sx={{
            fontSize: 8,
            textTransform: 'uppercase',
            color: "#bbb"
          }}>Botspacehq</Typography>
          <Typography sx={{
            fontSize: 10,
            fontWeight: 600,
            color: "#fff"
          }}>Posts</Typography>
        </Box>
      </Box>

      {/* Post Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 1, pb: 1, borderBottom: '1px solid', borderColor: '#222', color: '#fff', bgcolor: '#181818' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar src={userAvatar} sx={{ width: 24, height: 24 }} />
          <Typography variant="caption" sx={{ color: "#fff" }}>{username}</Typography>
        </Box>
        <IconButton size="small" sx={{ color: "#fff" }}>
          <MoreHorizIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Post Image */}
      <Box
        sx={{
          width: 280,
          height: 280,
          bgcolor: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          mx: 'auto',
        }}
      >
        <img
          src={src}
          alt="Selected"
          style={{
            width: 280,
            height: 280,
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>

      {/* Post Actions */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: 1 }}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="small" sx={{ color: "#fff", display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <FavoriteBorderIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <Typography
              sx={{
                fontSize: 12,
                color: "#fff",
                fontWeight: 500,
                mr: 0.5,
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              {likes}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="small" sx={{ color: "#fff", display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ChatBubbleOutlineIcon sx={{ fontSize: 20 }} />
            </IconButton>
            <Typography
              sx={{
                fontSize: 10,
                color: "#fff",
                fontWeight: 500,
                mr: 0.5,
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              {comments}
            </Typography>
          </Box>
          <IconButton size="small" sx={{ color: "#fff" }}><SendOutlinedIcon sx={{ fontSize: 20 }} /></IconButton>
        </Box>
        <IconButton size="small" sx={{ color: "#fff" }}><BookmarkBorderIcon sx={{ fontSize: 20 }} /></IconButton>
      </Box>
      {/* Caption */}
      <Box sx={{ px: 1, pb: 0.5 }}>
        <Typography
          variant="caption"
          sx={{ color: "#ccc", lineHeight: 0.5 }}
        >
          <Box component="span" fontWeight={600} sx={{ color: "#fff" }}>{username} </Box>
          {descr}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 0.5,
          gap: 1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          bgcolor: 'rgba(18,18,18,0.98)',
          zIndex: 10,
        }}
      >
        <IconButton sx={{ color: "#fff" }}><HomeIcon /> </IconButton>
        <IconButton size="small" sx={{ color: "#fff" }}><SearchIcon /></IconButton>
        <IconButton size="small" sx={{ color: "#fff" }}><AddBoxSharpIcon /></IconButton>
        <IconButton size="small" sx={{ color: "#fff" }}>
          <img src={reelsIcon} style={{ width: 22, height: 22 }} alt="Reels" />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}><Avatar src={userAvatar} sx={{ width: 22, height: 22 }} /> </IconButton>
      </Box>

      {/* Bottom Navigation */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 0.5,
          gap: 1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          bgcolor: 'rgba(18,18,18,0.98)',
          zIndex: 10,
        }}
      >
        <IconButton sx={{ color: "#fff" }}><HomeIcon /> </IconButton>
        <IconButton size="small" sx={{ color: "#fff" }}><SearchIcon /></IconButton>
        <IconButton size="small" sx={{ color: "#fff" }}><AddBoxSharpIcon /></IconButton>
        <IconButton size="small" sx={{ color: "#fff" }}>
          <img src={reelsIcon} style={{ width: 22, height: 22 }} alt="Reels" />
        </IconButton>
        <IconButton sx={{ color: "#fff" }}><Avatar src={userAvatar} sx={{ width: 22, height: 22 }} /> </IconButton>
      </Box>

      <CommentsSection comments={commentsList} visible={commentsList.length > 0 && !showDM} userProfile={userAvatar} />
      <DMPage visible={showDM} userProfile={userAvatar} openingMessage={firstDMMessage} linkText={linkButtonDMText} mainMessage={mainDMMessage} />
    </Box>
  );
};

export default Mobile;