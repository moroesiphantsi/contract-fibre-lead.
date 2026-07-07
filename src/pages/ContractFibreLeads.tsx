import React, { useState } from "react";

import {
  Box,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Avatar,
  CircularProgress,
  Snackbar,
  Alert,
  Divider,
  Stack,
  InputAdornment,
  Chip
} from "@mui/material";

import {
  Person,
  Phone,
  Email,
  Home,
  Badge,
  Wifi,
  Language,
  Send,
  Security,
  Bolt,
  RocketLaunch,
  Public,
  Apartment,
  Verified
} from "@mui/icons-material";

import { motion } from "framer-motion";

import { ref, push } from "firebase/database";

import { db } from "../firebase";

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const ContractFibreLeads = () => {

const [loading,setLoading]=useState(false);

const [success,setSuccess]=useState(false);

const [form,setForm]=useState({

firstName:"",
lastName:"",
phone:"",
email:"",
idNumber:"",
address:"",
suburb:"",
city:"",
province:"",
postalCode:"",
packageName:"",
monthlyPrice:"",
agentName:"",
notes:"",

createdAt:new Date().toISOString(),

status:"Pending"

});

const packagePlans=[

{
name:"Home Fibre 20 Mbps",
price:"R399"
},

{
name:"Home Fibre 50 Mbps",
price:"R599"
},

{
name:"Home Fibre 100 Mbps",
price:"R799"
},

{
name:"Home Fibre 200 Mbps",
price:"R999"
},

{
name:"Business Fibre 500 Mbps",
price:"R1 499"
},

{
name:"Business Fibre 1 Gbps",
price:"R1 999"
}

];

const handleChange=(e:any)=>{

const {name,value}=e.target;

setForm(prev=>({

...prev,

[name]:value

}));

};

const submitApplication=async()=>{

setLoading(true);

try{

await push(

ref(db,"contractFibreLeads"),

form

);

setSuccess(true);

setForm({

firstName:"",
lastName:"",
phone:"",
email:"",
idNumber:"",
address:"",
suburb:"",
city:"",
province:"",
postalCode:"",
packageName:"",
monthlyPrice:"",
agentName:"",
notes:"",
createdAt:new Date().toISOString(),
status:"Pending"

});

}catch(error){

console.log(error);

}

setLoading(false);

};

const styles={

page:{

minHeight:"100vh",

position:"relative",

overflow:"hidden",

background:
"linear-gradient(135deg,#dbeafe,#f8fbff,#eef7ff)",

padding:"50px 20px"

},

background:{

position:"absolute",

top:0,

left:0,

right:0,

bottom:0,

overflow:"hidden",

zIndex:0

},

glass:{

position:"relative",

zIndex:5,

maxWidth:1250,

margin:"0 auto",

borderRadius:"35px",

background:"rgba(255,255,255,.95)",

backdropFilter:"blur(30px)",

boxShadow:"0 30px 80px rgba(0,0,0,.12)",

padding:5

},

input:{

"& .MuiOutlinedInput-root":{

borderRadius:"18px",

background:"#ffffff",

transition:".35s",

"& fieldset":{

borderColor:"#dbeafe"

},

"&:hover fieldset":{

borderColor:"#0ea5e9"

},

"&.Mui-focused fieldset":{

borderWidth:2,

borderColor:"#2563eb"

}

}

},

submitButton:{

height:60,

fontWeight:800,

fontSize:18,

borderRadius:"18px",

background:
"linear-gradient(90deg,#2563eb,#0ea5e9)",

textTransform:"none",

boxShadow:"0 20px 40px rgba(37,99,235,.35)",

"&:hover":{

background:
"linear-gradient(90deg,#1d4ed8,#0284c7)"

}

}

};


return (

<Box sx={styles.page}>

{/* ================================
        FLOATING BACKGROUND
================================ */}

<Box sx={styles.background}>

<motion.div
animate={{
x:[0,120,0],
y:[0,-80,0],
scale:[1,1.15,1]
}}
transition={{
duration:18,
repeat:Infinity
}}
style={{
position:"absolute",
width:420,
height:420,
borderRadius:"50%",
background:"rgba(37,99,235,.18)",
filter:"blur(120px)",
top:-120,
left:-120
}}
/>

<motion.div
animate={{
x:[0,-120,0],
y:[0,100,0],
scale:[1,1.25,1]
}}
transition={{
duration:22,
repeat:Infinity
}}
style={{
position:"absolute",
width:380,
height:380,
borderRadius:"50%",
background:"rgba(14,165,233,.15)",
filter:"blur(120px)",
top:80,
right:-100
}}
/>

<motion.div
animate={{
x:[0,80,0],
y:[0,-120,0],
rotate:[0,180,360]
}}
transition={{
duration:28,
repeat:Infinity
}}
style={{
position:"absolute",
width:500,
height:500,
borderRadius:"50%",
background:"rgba(255,255,255,.18)",
filter:"blur(150px)",
bottom:-180,
left:"35%"
}}
/>

</Box>

{/* =====================================
              MAIN CONTAINER
===================================== */}

<MotionPaper

sx={styles.glass}

initial={{opacity:0,y:60}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

>

{/* =====================================
                  HERO
===================================== */}

<Grid
container
spacing={5}
alignItems="center"
mb={6}
>

<Grid item xs={12} md={8}>

<MotionTypography

variant="h3"

fontWeight={900}

color="#0f172a"

animate={{

x:[0,25,0]

}}

transition={{

duration:7,

repeat:Infinity

}}

>

OpenServe Contract Fibre

</MotionTypography>

<MotionTypography

mt={2}

fontSize={20}

lineHeight={1.9}

color="#475569"

animate={{

y:[0,-10,0]

}}

transition={{

duration:6,

repeat:Infinity

}}

>

Experience South Africa's next-generation fibre
network with lightning-fast internet,
professional installation,
secure connectivity and reliable service
for homes and businesses.

</MotionTypography>

<Box

display="flex"

gap={2}

mt={4}

flexWrap="wrap"

>

<Chip

icon={<Verified/>}

label="OpenServe Certified"

color="primary"

/>

<Chip

icon={<Bolt/>}

label="Ultra Fast Fibre"

color="success"

/>

<Chip

icon={<Security/>}

label="Secure Connection"

color="secondary"

/>

<Chip

icon={<RocketLaunch/>}

label="2026 Smart Installation"

color="warning"

/>

</Box>

</Grid>

<Grid item xs={12} md={4}>

<MotionBox

display="flex"

justifyContent="center"

animate={{

y:[0,-25,0]

}}

transition={{

duration:5,

repeat:Infinity

}}

>

<Avatar

sx={{

width:240,

height:240,

background:
"linear-gradient(135deg,#2563eb,#38bdf8)",

boxShadow:
"0 30px 60px rgba(37,99,235,.35)"

}}

>

<Wifi

sx={{

fontSize:120,

color:"#fff"

}}

/>

</Avatar>

</MotionBox>

</Grid>

</Grid>

<Divider sx={{mb:5}}/>

{/* =====================================
          APPLICATION FORM STARTS
===================================== */}

<Grid container spacing={3}>

  {/* ===========================
        PERSONAL DETAILS
=========================== */}

<Grid item xs={12}>
  <Typography
    variant="h5"
    fontWeight={800}
    color="#0f172a"
    mb={1}
  >
    Personal Information
  </Typography>

  <Typography
    color="text.secondary"
    mb={2}
  >
    Complete your details below to submit your
    OpenServe Contract Fibre application.
  </Typography>
</Grid>

<Grid item xs={12} md={6}>
  <TextField
    fullWidth
    label="First Name"
    name="firstName"
    value={form.firstName}
    onChange={handleChange}
    sx={styles.input}
    InputProps={{
      startAdornment:(
        <InputAdornment position="start">
          <Person color="primary"/>
        </InputAdornment>
      )
    }}
  />
</Grid>

<Grid item xs={12} md={6}>
  <TextField
    fullWidth
    label="Last Name"
    name="lastName"
    value={form.lastName}
    onChange={handleChange}
    sx={styles.input}
    InputProps={{
      startAdornment:(
        <InputAdornment position="start">
          <Person color="primary"/>
        </InputAdornment>
      )
    }}
  />
</Grid>

<Grid item xs={12} md={6}>
  <TextField
    fullWidth
    label="South African ID Number"
    name="idNumber"
    value={form.idNumber}
    onChange={handleChange}
    sx={styles.input}
    InputProps={{
      startAdornment:(
        <InputAdornment position="start">
          <Badge color="primary"/>
        </InputAdornment>
      )
    }}
  />
</Grid>

<Grid item xs={12} md={6}>
  <TextField
    fullWidth
    label="Cellphone Number"
    name="phone"
    value={form.phone}
    onChange={handleChange}
    sx={styles.input}
    InputProps={{
      startAdornment:(
        <InputAdornment position="start">
          <Phone color="primary"/>
        </InputAdornment>
      )
    }}
  />
</Grid>

<Grid item xs={12}>
  <TextField
    fullWidth
    label="Email Address"
    name="email"
    value={form.email}
    onChange={handleChange}
    sx={styles.input}
    InputProps={{
      startAdornment:(
        <InputAdornment position="start">
          <Email color="primary"/>
        </InputAdornment>
      )
    }}
  />
</Grid>

{/* ===========================
          INSTALLATION ADDRESS
=========================== */}

<Grid item xs={12}>
  <Divider sx={{my:2}}/>

  <Typography
    variant="h5"
    fontWeight={800}
    color="#0f172a"
    mb={2}
  >
    Installation Address
  </Typography>
</Grid>

<Grid item xs={12}>
  <TextField
    fullWidth
    label="Street Address"
    name="address"
    value={form.address}
    onChange={handleChange}
    sx={styles.input}
    InputProps={{
      startAdornment:(
        <InputAdornment position="start">
          <Home color="primary"/>
        </InputAdornment>
      )
    }}
  />
</Grid>

<Grid item xs={12} md={4}>
  <TextField
    fullWidth
    label="Suburb"
    name="suburb"
    value={form.suburb}
    onChange={handleChange}
    sx={styles.input}
  />
</Grid>

<Grid item xs={12} md={4}>
  <TextField
    fullWidth
    label="City / Town"
    name="city"
    value={form.city}
    onChange={handleChange}
    sx={styles.input}
    InputProps={{
      startAdornment:(
        <InputAdornment position="start">
          <Apartment color="primary"/>
        </InputAdornment>
      )
    }}
  />
</Grid>

<Grid item xs={12} md={4}>
  <TextField
    fullWidth
    label="Postal Code"
    name="postalCode"
    value={form.postalCode}
    onChange={handleChange}
    sx={styles.input}
  />
</Grid>

<Grid item xs={12} md={6}>
  <TextField
    select
    fullWidth
    label="Province"
    name="province"
    value={form.province}
    onChange={handleChange}
    sx={styles.input}
  >
    <MenuItem value="Gauteng">Gauteng</MenuItem>
    <MenuItem value="Limpopo">Limpopo</MenuItem>
    <MenuItem value="Mpumalanga">Mpumalanga</MenuItem>
    <MenuItem value="Free State">Free State</MenuItem>
    <MenuItem value="KwaZulu-Natal">KwaZulu-Natal</MenuItem>
    <MenuItem value="North West">North West</MenuItem>
    <MenuItem value="Northern Cape">Northern Cape</MenuItem>
    <MenuItem value="Western Cape">Western Cape</MenuItem>
    <MenuItem value="Eastern Cape">Eastern Cape</MenuItem>
  </TextField>
</Grid>

<Grid item xs={12} md={6}>
  <MotionBox
    animate={{
      x:[0,20,0]
    }}
    transition={{
      duration:6,
      repeat:Infinity
    }}
    sx={{
      height:"100%",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}
  >
    <Avatar
      sx={{
        width:140,
        height:140,
        background:"linear-gradient(135deg,#0ea5e9,#2563eb)"
      }}
    >
      <Public sx={{fontSize:70}}/>
    </Avatar>
  </MotionBox>
</Grid>

{/* ===========================
          FIBRE PACKAGE
=========================== */}

<Grid item xs={12}>
  <Divider sx={{ my:4 }}/>

  <Typography
    variant="h5"
    fontWeight={800}
    color="#0f172a"
    mb={2}
  >
    Choose Your Fibre Package
  </Typography>
</Grid>

<Grid item xs={12} md={6}>
  <TextField
    select
    fullWidth
    label="OpenServe Fibre Package"
    name="packageName"
    value={form.packageName}
    onChange={(e)=>{

      const selected=packagePlans.find(
        p=>p.name===e.target.value
      );

      setForm(prev=>({

        ...prev,

        packageName:e.target.value,

        monthlyPrice:selected?.price || ""

      }));

    }}
    sx={styles.input}
    InputProps={{
      startAdornment:(
        <InputAdornment position="start">
          <Wifi color="primary"/>
        </InputAdornment>
      )
    }}
  >

    {packagePlans.map((item)=>(

      <MenuItem
        key={item.name}
        value={item.name}
      >

        {item.name} • {item.price}/Month

      </MenuItem>

    ))}

  </TextField>
</Grid>

<Grid item xs={12} md={6}>
  <TextField
    fullWidth
    label="Monthly Price"
    value={form.monthlyPrice}
    InputProps={{
      readOnly:true
    }}
    sx={styles.input}
  />
</Grid>

<Grid item xs={12}>
  <TextField
    fullWidth
    multiline
    rows={5}
    label="Additional Notes (Optional)"
    name="notes"
    value={form.notes}
    onChange={handleChange}
    sx={styles.input}
  />
</Grid>

{/* ===========================
        INFORMATION CARD
=========================== */}

<Grid item xs={12}>

  <MotionPaper

    elevation={0}

    animate={{
      y:[0,-12,0]
    }}

    transition={{
      duration:5,
      repeat:Infinity
    }}

    sx={{

      mt:3,

      p:4,

      borderRadius:"25px",

      background:
      "linear-gradient(135deg,#eff6ff,#ffffff)",

      border:"1px solid #dbeafe"

    }}

  >

    <Typography
      variant="h5"
      fontWeight={800}
      mb={2}
    >

      Why Choose OpenServe?

    </Typography>

    <Grid container spacing={3}>

      <Grid item xs={12} md={3}>

        <Chip

          icon={<Bolt/>}

          label="Ultra Fast Fibre"

          color="primary"

          sx={{
            width:"100%",
            height:55,
            fontWeight:700
          }}

        />

      </Grid>

      <Grid item xs={12} md={3}>

        <Chip

          icon={<Security/>}

          label="Secure Network"

          color="success"

          sx={{
            width:"100%",
            height:55,
            fontWeight:700
          }}

        />

      </Grid>

      <Grid item xs={12} md={3}>

        <Chip

          icon={<RocketLaunch/>}

          label="Quick Installation"

          color="secondary"

          sx={{
            width:"100%",
            height:55,
            fontWeight:700
          }}

        />

      </Grid>

      <Grid item xs={12} md={3}>

        <Chip

          icon={<Verified/>}

          label="Trusted Since 2026"

          color="warning"

          sx={{
            width:"100%",
            height:55,
            fontWeight:700
          }}

        />

      </Grid>

    </Grid>

  </MotionPaper>

</Grid>

{/* ===========================
        SUBMIT BUTTON
=========================== */}

<Grid item xs={12}>

  <MotionBox

    mt={5}

    display="flex"

    justifyContent="center"

    animate={{
      scale:[1,1.03,1]
    }}

    transition={{
      duration:3,
      repeat:Infinity
    }}

  >

    <Button

      size="large"

      variant="contained"

      endIcon={
        loading
        ?
        <CircularProgress
          size={24}
          color="inherit"
        />
        :
        <Send/>
      }

      disabled={loading}

      sx={styles.submitButton}

      onClick={submitApplication}

    >

      {loading
      ?
      "Submitting Application..."
      :
      "Submit Fibre Application"}

    </Button>

  </MotionBox>

</Grid>

</Grid>

</MotionPaper>

{/* ===========================
          SUCCESS MESSAGE
=========================== */}

<Snackbar
  open={success}
  autoHideDuration={5000}
  onClose={() => setSuccess(false)}
  anchorOrigin={{
    vertical: "top",
    horizontal: "center"
  }}
>
  <Alert
    severity="success"
    variant="filled"
    sx={{
      width: "100%",
      borderRadius: "18px",
      fontWeight: 700,
      fontSize: 16
    }}
  >
    🎉 Your OpenServe Fibre application has been submitted successfully.
    Our team will contact you shortly.
  </Alert>
</Snackbar>

{/* ===========================
              FOOTER
=========================== */}

<Box
  mt={8}
  textAlign="center"
>

  <motion.div
    animate={{
      y: [0, -8, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity
    }}
  >

    <Avatar
      sx={{
        width: 90,
        height: 90,
        mx: "auto",
        mb: 2,
        background:
          "linear-gradient(135deg,#2563eb,#38bdf8)",
        boxShadow:
          "0 20px 50px rgba(37,99,235,.35)"
      }}
    >
      <Wifi sx={{ fontSize: 45 }} />
    </Avatar>

  </motion.div>

  <Typography
    variant="h5"
    fontWeight={800}
    color="#0f172a"
  >
    OpenServe Contract Fibre
  </Typography>

  <Typography
    mt={1}
    color="text.secondary"
  >
    Fast • Reliable • Professional • Secure
  </Typography>

  <Divider sx={{ my:4 }} />

  <Grid
    container
    spacing={3}
    justifyContent="center"
  >

    <Grid item>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Phone color="primary"/>
        <Typography>
          087 000 0000
        </Typography>
      </Stack>

    </Grid>

    <Grid item>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Email color="primary"/>
        <Typography>
          info@openserve.co.za
        </Typography>
      </Stack>

    </Grid>

    <Grid item>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <Language color="primary"/>
        <Typography>
          www.openserve.co.za
        </Typography>
      </Stack>

    </Grid>

  </Grid>

  <Typography
    mt={5}
    color="text.secondary"
  >
    © 2026 OpenServe Contract Fibre Application Portal
  </Typography>

  <Typography
    color="text.secondary"
    mb={3}
  >
    Designed with ❤️ for a smarter South Africa.
  </Typography>

</Box>


</Box>

);

};

export default ContractFibreLeads;