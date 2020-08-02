import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Education</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography align="left" display="block">
            <h4>
              Temple University BS Biochemistry (cum laude, Dean Scholar, 3.65
              GPA)
            </h4>
            <h4>UC Berkeley Extension Full Stack Flex Bootcamp</h4>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Programming Skills
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography align="left">
            <div>
              <h4>Web Development:</h4>
              <p>
                Knowledgable of front end web development languages (HTML, CSS)
                and programming languages (JavaScript, Python). Used tools such
                as jQuery, RESTful APIs, and AJAX. Building MVC Architecture
                with React and querying data using MySQL database. Built a few
                websites using these tools and pushed projects to Github.
              </p>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Laboratory Skills:
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography align="left">
            <div>
              <h4>Biochemistry</h4>
              <p>
                Agarose and SDS-PAGE gel electrophoresis, protein purification,
                chromatography, spectrophotometry, westernblot, ELISA, mammalian
                cell culture and transfection, AKTA Chromatography, HPLC/UPLC,
                bioconjugation
              </p>
              <h4>Molecular Biology</h4>
              <p>
                Bacteria culture and transformation, RT-PCR, Northern and
                Southern Blot, RNA purification, co-immunoprecipitation and
                histochemistry, plasmid design for colorimetric, fluorescence,
                luminescence reporter assays in-vitro and in-vivo, Gibson
                Assembly
              </p>
              <h4>Organic Chemistry</h4>
              <p>
                Fisher Esterfication, Diels-Alder, Aromatic Substitution, IR,
                H-NMR, C-NMR, TLC
              </p>
              <h4>Photometry</h4>
              <p>
                Bright field, fluorescence, phase-contrast, confocal, SEM,
                chemiluminescence, sample prep and cryosectioning, automated
                slide imaging, flow cytometry, Dynamic Light Scattering, UV-Vis
                Spectrophotometry
              </p>
              <h4>Programming</h4>
              <p>Python, scipy, matplotlib, Bedtools, ZPL, Latex</p>
              <h4>Software</h4>
              <p>
                Origin, ImageJ, Microsoft Office, MestraNova, Galaxy, Github,
                Quartzy
              </p>
              <h4>Animal Handling</h4>
              <p>
                Mice and Rat short anesthesia, oral gavage, IP injections, IV
                injections, blood collection, euthanasia
              </p>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Research Experience
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography align="left">
            <div>
              <h4>Target Discovery Inc.</h4>
              <p>Associate Scientist</p>
              <ul>
                <li>
                  Goal: Developed MALDI mass spectrometry industry kits for
                  measuring lipids in extra virgin olive oil
                </li>
                <li>
                  Wrote R scripts to match masses to olive oil found in
                  literature
                </li>
                <li>Presented research in lab reports in weekly meetings</li>
              </ul>
              <h4>DNAlite Therapeutics, Inc</h4>
              <p>Research Associate</p>
              <ul>
                <li>
                  Goal: Iterated and formulated lipid nanoparticles (LNP) to
                  encapsulate and deliver nucleic acids to the gastrointestinal
                  (GI) tract
                </li>
                <li>
                  Developed in-vitro and in-vivo assays to measure the
                  stability, uptake, and expression of LNP encapsulated nucleic
                  acids in the GI tract.
                </li>
                <li>
                  In-vitro assays developed include CRE-LOX activation of
                  fluorescence reporters or transfection of plasmid reporters
                  such as gLuc, fLuc, SEAP, etc. Reporters are measured using
                  microplate reader, microscopy, flow cytometry, RT-PCR, ELISA,
                  Western Blot, etc. Maintained cell cultures by passing, cell
                  counting and cryo-preserving using sterile technique.
                </li>
                <li>
                  Developed in-vivo LNP transfection assays using CRE-LOX
                  activation of fluorescence reporters or transfection of
                  reporters such as gLuc, fLuc, SEAP with similar readouts as
                  in-vitro. Dosed and sacrificed mice to isolate and collect
                  tissue.
                </li>
                <li>
                  Developed a well organized lab with label printing through
                  electronic lab notebook (ELN) and kept track of inventory,
                  purchasing when supplies run low
                </li>
              </ul>
              <h4>Robert Stanley Lab</h4>
              <p>Temple University Undergraduate Student</p>
              <ul>
                <li>
                  Goal: Create mutant DNA photolyase lacking the photoantenna
                  domain and research its function
                </li>
                <li>
                  DNA photolyase gene was cloned into a pET vector and E.coli
                  Rosetta competent cells was transformed with plasmid construct
                </li>
              </ul>
              <h4>Weidong Yang Lab</h4>
              <p>Temple University Undergraduate Student</p>
              <ul>
                <li>
                  Goal: Nuclearporin50 gene, coding a scaffold protein in the
                  nuclear pore complex, was cloned into an expression vector
                  with two fluorescence tags (GFP and JF) and imaged using
                  super-resolution microscopy
                </li>
                <li>
                  Passaged Hela cells were transformed with nup50 plasmid
                  construct and nup50 was visualized using fluorescence
                  microscopy
                </li>
                <li>
                  JF fluorescence binding events were mapped to point spread
                  functions and reduced to centroids to achieve sub-diffraction
                  limit resolution
                </li>
              </ul>
              <h4>Giordano Lab</h4>
              <p>Temple University Undergraduate Intern</p>
              <ul>
                <li>
                  Responsibilities: Follow western blot lab procedures and ELISA
                  labs to characterize protein binding in cancer cells. Passage
                  Hela mammalian cells to maintain and store lab cultures Keep
                  accurate records of independent researcher’s findings and
                  observations.
                </li>
              </ul>
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            University Research Projects
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography align="left" display="block">
            <h4>Advanced Microscopy Techniques Project</h4>
            <p>
              Cheek Cell project: visualized stained cheek cells using confocal
              microscopy and created 3D projections using ImageJ
            </p>
            <h4>Techniques of Molecular Biology Final Project</h4>
            <p>
              CRN cloning: Cloned human CRN gene into a vector and transformed
              competent cells with recombinant plasmid
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Presentation and Publications
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography align="left" display="block">
            <h4>
              Presentation: Isolation of FAD domain in DNA Photolyase to
              Discover Fusion Protein
            </h4>
            <p>Summer 2016 Temple Research Symposium</p>
            <h4>
              Patent: Composition and Methods for Biologyical Delivery Vehicles
            </h4>
            <p>DNAlite Therapeutics, Inc.</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
