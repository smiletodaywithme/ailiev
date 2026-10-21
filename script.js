document.addEventListener('DOMContentLoaded', () => {
    // Publications logic
    const publications = [
        "I. Iliev, A., Malik, A., Anil Gowda, G., & Samal, S. (2026). AI Use Cases for the Digital Documentation and Preservation of Cultural and Scientific Heritage. Digital Presentation and Preservation of Cultural and Scientific Heritage, 16, 231-244. https://doi.org/10.55630/dipp.2026.16.19",
        "I. Iliev, A., Mallick, S., & Ganesh, G. (2026). AI-Assisted Automated Code Refactoring and Technical Debt Reduction: Supporting Digital Knowledge Documentation and Preservation. Digital Presentation and Preservation of Cultural and Scientific Heritage, 16, 181-193. https://doi.org/10.55630/dipp.2026.16.15",
        "Murthy Keshav Murthy, H., & I. Iliev, A. (2026). Trustworthy Retrieval-Augmented Generation for the Digital Preservation and Transparent Presentation of Biomedical Scientific Heritage. Digital Presentation and Preservation of Cultural and Scientific Heritage, 16, 377-386. https://doi.org/10.55630/dipp.2026.16.31",
        "D. B. Durak, T. S. Gada, F. E. G. Kotb Akrab and A. I. Iliev, \"Improving Software Requirements Quality Using LLM-Based Repair-Augmented Retrieval,\" 2026 International Conference on Computer Systems and Technologies (CompSysTech), Ruse, Bulgaria, 2026, pp. 1-8, DOI: 10.1109/CompSysTech69798.2026.11683218, [Link](https://ieeexplore.ieee.org/abstract/document/11683218)",
        "Alexander I. Iliev. AI Popular Systems Architecture, Capabilities, and Comparative Analysis, LAP Lambert Academic Publishing, ISBN: 978-66-30-21444-4, 2026, p. 285, [Link](https://www.morebooks.shop/shop-ui/shop/product/9786630214444)",
        "Alexander I. Iliev. Practical Benchmarking and Hands-On Evaluation of AI Popular Systems, LAP Lambert Academic Publishing, ISBN: 978-66-30-22514-3, 2026, p. 154, [Link](https://www.morebooks.shop/shop-ui/shop/product/9786630225143)",
        "Alexander I. Iliev. Smart Python for Machine Learning and Intelligent Modelling, Foundations and Classical Machine Learning | Part 1, LAP Lambert Academic Publishing, ISBN: 978-66-30-10726-5, 2026, p. 305, [Link](https://www.morebooks.shop/shop-ui/shop/product/9786630107265)",
        "Alexander I. Iliev. Smart Python for Machine Learning and Intelligent Systems, Deep Learning, Transfer Learning, and AI Engineering | Part 2, LAP Lambert Academic Publishing, ISBN: 978-66-30-21092-7, 2026, p. 313, [Link](https://www.morebooks.shop/shop-ui/shop/product/9786630210927)",
        "Alexander I. Iliev, Ahmed Noureldin Brema Noureldi, Burak Kagan Yılmazer, Robert Richartz. How can AI be used to enhance creativity in Artistic Domains. International Conference on Management of Digital EcoSystems MEDES'25, In Communications in Computer and Information Science series, Vol. 3103, Springer, 2026, ISSN:1865-0929, SJR (Scopus):0.181 (2025), Q4 (Scopus), pp 316–330",
        "Alexander I. Iliev, Amirreza Soltani, Vivek Devappally Shivanna, Sanjeeth Chittyala. How Can AI Systems Be Made to Understand and Process Abstract Concepts. International Conference on Management of Digital EcoSystems MEDES'25, In Communications in Computer and Information Science series, Vol. 3103, Springer, 2026, ISSN:1865-0929, SJR (Scopus):0.181 (2025), Q4 (Scopus), pp 295–300",
        "Alexander I. Iliev, Pradyumna S.R. Horizontal vs Oriented Bounding Boxes in Aerial Object Detection Integrating Symbolic Reasoning with Oriented Bounding Box Detection in Aerial Imagery. International Conference on Management of Digital EcoSystems MEDES'25, In Communications in Computer and Information Science series, Vol. 3103, Springer, 2026, ISSN:1865-0929, SJR (Scopus):0.181 (2025), Q4 (Scopus), pp 582–593",
        "A. I. Iliev, D. Singh, S. Chittyala. Bias Detection and Mitigation in Large Language Models for Code Generation. IEEE Internet of Things, IEEE, 2025, DOI:10.1109/JIOT.2025.3636829, SJR (Scopus):2.483 Q1 - оглавява ранглистата (Web of Science)",
        "Alexander I. Iliev, Nithin Jayagovindan. Intelligent Autonomous Vehicles (IAV) using Artificial Intelligence Focusing on Perception. IS&T International Symposium on Electronic Imaging Science and Technology, 37, 3, 2025, DOI:https://doi.org/10.2352/ei.2025.37.3.mobmu-324, 324-327. SJR (Scopus):0.222",
        "I. Iliev, A.. Discovery of Deepfakes in Art. Digital Presentation and Preservation of Cultural and Scientific Heritage, 15, BAN, 2025, DOI:https://doi.org/10.55630/dipp.2025.15.5, 55-64. SJR (Scopus):0.243 SJR, непопадащ в Q категория (Web of Science)",
        "Iliev Iliev, A., Murthy Keshav Murthy, H.. Secure Curation and Reuse of Digital Scientific Data Using Retrieval- Augmented Generation Systems. Digital Presentation and Preservation of Cultural and Scientific Heritage, 15, BAN, 2025, DOI:https://doi.org/10.55630/dipp.2025.15.17, 187-196. SJR (Scopus):0.243 SJR, непопадащ в Q категория (Web of Science)",
        "Iliev, A. I., Mansoor, N.. Explainable Al for Deepfake Detection. Applied Sciences, 15(2), 725, MDPI, 2025, DOI:https://doi.org/10.3390/app15020725, SJR (Scopus):0.52, JCR-IF (Web of Science):2.7 Q2 (Web of Science)",
        "Poyraz, R. A., Suvarna, P., & Iliev, A. I. (2024). Emotion recognition through analysis of speech – A review. Digital Presentation and Preservation of Cultural and Scientific Heritage, 14, 227–238. https://doi.org/10.55630/dipp.2024.14.21",
        "Mansoor, N., Iliev, A. (2024). DeepFake Detection Using Deep Learning. In: Arai, K. (eds) Intelligent Computing. SAI 2024. Lecture Notes in Networks and Systems, vol 1018. Springer, Cham. https://doi.org/10.1007/978-3-031-62269-4_14",
        "Balaji, K., Iliev Iliev, A. (2024). Comprehensive Feature Selection Methods for Predicting Diabetes and Stroke Risk. In: Arai, K. (eds) Intelligent Computing. SAI 2024. Lecture Notes in Networks and Systems, vol 1019. Springer, Cham. https://doi.org/10.1007/978-3-031-62273-1_9",
        "Darinka, I., Bistra, D., Alexander, I., & Petya, A. (2024). Benchmarking analysis at establishing a culture of wellness. Forum for Education Studies, 2(3), 1418. https://doi.org/10.59400/fes.v2i3.1418",
        "Rowney T., Iliev A.I., \"Recognition of Handwritten Mathematical Expressions Using Systems of Convolutional Neural Networks\", Serdica Journal of Computing, Vol.17, Issue 2, 21.02.2024, pp. 107-116, DOI: https://doi.org/10.55630/sjc.2023.17.107-116, ISSN 1312-6555 (Print), ISSN 1314-7897 (Online)",
        "Chikalanov, A., Kirilov, L., Kovatcheva, E., Nikolov, R., Shoikova, E., Iliev, A., & Gotsev, L. (2023, October). A Model of Big Data Architecture on the Base of FIWARE Components. In Proceedings of the Bulgarian Academy of Sciences - Comptes Rendus de L'Academie Bulgare des Sciences (Vol. 76, No. 9, pp. 1393-1401). https://doi.org/10.7546/CRABS.2023.09.10. Indexed in Scopus: SJR 2022: 0.18, Multidisciplinary Q3.",
        "Iliev, A.I., \"Benefits and Security Challenges of Big Data Analytics\", Digital Presentation and Preservation of Cultural and Scientific Heritage, Bulgarian Academy of Sciences, Issue 13, 2023, pp. 169-180, ISSN: 1314- 4006 (Print), eISSN: 2535-0366 (Online), DOI: https://doi.org/10.55630/dipp.2023.13.16",
        "Alexander I. Iliev. Artificial Intelligence Smart Systems Design - Applied Use Cases | Part 1. Lambert Academic Publishing, 2023, ISBN:978-620-6-78830-0, pp. 136",
        "Alexander I. Iliev. Artificial Intelligence in Smart Systems - Applied Use Cases | Part 2. Lambert Academic Publishing, 2023, ISBN:978-620-7-45055-8, pp. 168",
        "Iliev, A. I. (2023). Benefits And Security Challenges of Big Data. Digital Presentation and Preservation of Cultural and Scientific Heritage, Vol. 13, pp.169-180, ISSN: 1314-4006 (Print), eISSN: 2535-0366 (Online)",
        "Nebioglu, B., Iliev, A., \"Higher Order Orthogonal Polynomials as Activation Functions in Artificial Neural Networks\", Serdica Journal of Computing, 2023, Volume 17, No 1, pp. 1-16, ISSN 1312-6555 (Print), ISSN 1314-7897 (Online) , DOI: https://doi.org/10.55630/sjc.2023.17.1-16",
        "I. Iliev, A. (2023). Perspective Chapter: Emotion Detection Using Speech Analysis and Deep Learning. IntechOpen. DOI: 10.5772/intechopen.110730, https://www.intechopen.com/online-first/87216",
        "Iliev A.I., Nimmala A., Rahiman R.A., Raju S., Chilakalanerpu S., \"Fake Review Recognition using an SVM Model\", Computing Conference (SAI) 2023 - proceedings published in Springer series \"Lecture Notes in Networks and Systems\" and submitted for consideration to Web of Science, SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH and SCImago",
        "Umapathy S.G., Iliev A.I., \"Style Accessory Occlusion using CGAN with Paired Data\", Computing Conference (SAI) 2023 - proceedings published in Springer series \"Lecture Notes in Networks and Systems\" and submitted for consideration to Web of Science, SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH and SCImago",
        "Iliev A.I., Malvika Panwar M., \"AI in Cryptocurrency\", Future of Information and Communication Conference (FICC) 2023 - proceedings published in Springer Nature, for consideration to Web of Science, SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH and SCImago",
        "Iliev A.I., Raksha A., “Text Regression Analysis for Predictive Intervals using Gradient Boosting”, Future of Information and Communication Conference (FICC) 2023 - proceedings published in Springer Nature, for consideration to Web of Science, SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH and SCImago",
        "Mansoor N., Iliev A.I., \"Artificial Intelligence in Forensic Science\", Future of Information and Communication Conference (FICC) 2023 – proceedings published in Springer Nature, for consideration to Web of Science, SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH and SCImago",
        "Rajasekaran R.K., Iliev A.I., “Hybrid Recommendation System”, Future of Information and Communication Conference (FICC) 2023 - proceedings published in Springer Nature, for consideration to Web of Science, SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH and SCImago",
        "Iliev A.I., Anand A., “Huber Loss and Neural Networks Application in Property Price Prediction”, Future of Information and Communication Conference (FICC) 2023 - proceedings published in Springer Nature for consideration to Web of Science, SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH and SCImago",
        "Iliev A.I., Panwar M., “Cryptocurrency Forecasting using AI”, Proc. of the Interdisciplinary Conference on Mechanics, Computers and Electrics (ICMECE 2023), 6-7 October 2022, Barcelona, Spain",
        "Mansoor N., Shamli S., Iliev A.I., “Sports Video Classification using CNN Transfer Learning Model”, Proc. of the Interdisciplinary Conference on Mechanics, Computers and Electrics (ICMECE 2023), 6-7 October 2022, Barcelona, Spain",
        "Raksha A., Iliev A.I., \"Prediction Intervals for Text Analysis through Quantile Regression\", Proc. of the Interdisciplinary Conference on Mechanics, Computers and Electrics (ICMECE 2023), 6-7 October 2022, Barcelona, Spain",
        "D. Ignatova, A. Iliev (2023). “Current methods and models combining nutritional regimes with motor activity, Recreation, Wellness Industry and Niche Tourism”. International Scientific Journal for Smart Innovations, vol.5, Issue (1-2), pp. 8-14. ISSN is 2603-4921.",
        "Gunjur Umapathy, S., & I. Iliev, A. (2022). Segmentation of Floorplans and Heritage Sites: An Approach to Unbalanced Dataset. Digital Presentation and Preservation of Cultural and Scientific Heritage, Vol.12, pp.205– 216. https://doi.org/10.55630/dipp.2022.12.17",
        "I. Iliev, A., & Mote, A. (2022). Visual Emotion Recognition Using Deep Neural Networks. Digital Presentation and Preservation of Cultural and Scientific Heritage, Vol.12, pp.77–88. https://doi.org/10.55630/dipp.2022.12.5",
        "Ignatova, D., & Iliev, A. (2022). Benchmarking for the development of speed and power characteristics. Strategies for Policy in Science and Education, V. 30, 4, 411-421. ISSN: 1310–0270 (Print), 1314–8575 (Online). DOI: 10.53656/str2022-4-6-ben. Az-buki National Publishing House for Education and Science, Sofia, Bulgaria, August 2022.",
        "Iliev A.I., Mote A., Manoharan A., “Multi-Lingual Emotion Classification using Convolutional Neural Networks”, 13th International Conference on Large-Scale Scientific Computing, June 7-11, 2021, Sozopol, Bulgaria, eBook ISBN: 978-3-030-97549-4, Print ISBN: 978-3-030-97548-7",
        "Iliev A.I., Dewli M., Kalkan M., Prakash P.K., Turkar R., \"Acoustic Event Detection and Sound Separation for security systems and IoT devices\", 22nd International Conference on Computer Systems and Technologies, CompSysTech'21, 18-19 June 2021, University of Ruse, Bulgaria",
        "Iliev A.I., \"Modern Challenges in Machine Learning and Artificial Intelligence\", Digital Presentation and Preservation of Cultural and Scientific Heritage, Volume 11, Sofia: Institute of Mathematics and Informatics at the Bulgarian Academy of Sciences, 10.09.2021, pp.033-040, SSN: 1314-4006 (Print), eISSN: 2535-0366 (Online)",
        "Raksha A., Rajasekaran R.K., Francis P., Yogeshwara S., Iliev A.I., \"Home Automation through Hand Gestures Using ResNet50 and 3D-CNN\", Digital Presentation and Preservation of Cultural and Scientific Heritage, Volume 11, Sofia: Institute of Mathematics and Informatics at the Bulgarian Academy of Sciences, 2021, pp.215-226",
        "Alexander I. Iliev, Peter L. Stanchev, “Smart Services Using Voice and Images”, Book Chapter, Transactions on Large-Scale Data- and Knowledge-Centered Systems, Volume XLVII, LNCS 12630, Springer, Special Issue on \"Digital Ecosystems and Social Networks\" DESN, 2021, ISBN 978-3-662-62918-5, https://doi.org/10.1007/978- 3-662-62919-2, pp.137-154",
        "Ignatova D., Alexander I. Iliev, “Motor Qualities and Their Influence On The Children’s Development”, International Scientific Journal of “Recreation, Wellness Industry and Niche Tourism”, ISSN: 2603-4921, Vol.2, Iss.1-2 UK, pp. 16-20, 22-27.Dec.2020",
        "Alexander Iliev, Ameya Mote, Arjun Manoharan, “Cross-Cultural Emotion Recognition and Comparison Using Convolutional Neural Networks”, Digital Presentation and Preservation of Cultural and Scientific Heritage Conference Proceedings, Vol. 10, Sofia, Bulgaria: Institute of Mathematics and Informatics – BAS, 2020. ISSN: 1314-4006, eISSN: 2535-0366, pp. 089-102",
        "Akash Apturkar, Alexander I. Iliev, Amruth Anand, Arush Oli, Swadesh Reddy Siddenki, Vikram Reddy Meka, \"Sentiment Analysis of Speech with Application to Various Languages\", Digital Presentation and Preservation of Cultural and Scientific Heritage Conference Proceedings, Vol. 10, Sofia, Bulgaria: Institute of Mathematics and Informatics – BAS, 2020. ISSN: 1314-4006, eISSN: 2535-0366, pp. 103-118",
        "Iliev, A. I., & Stanchev, P. L. (2020), “Smart Ecosystems through Voice and Images”, Proceedings of 35th International Conference on Computers and Their Applications, CATA 2020. Vol. 69, pp. 256-263. San Francisco: EPiC Series in Computing.",
        "Iliev, A.I. 2018. “Content Discovery Using Perceptual Automation”, In Proceedings of the 10th International Conference on Management of Digital EcoSystems (MEDES’18), September 25–28, 2018, Tokyo, Japan. ACM, New York, NY, USA, pp. 233-238, ISBN: 978-1-4503-5622-0, DOI: 10.1145/3281375.3281399",
        "Alexander I. Iliev and Peter L. Stanchev, “Glottal Attributes Extracted from Speech with Application to Emotion Driven Smart Systems”, in Proceedings of the 10th International Joint Conference on Knowledge Discovery, Knowledge Engineering and Knowledge Management (IC3K 2018) - Volume 1: KDIR, pages 297-302 ISBN: 978- 989-758-330-8, indexed in Thomson Reuters, Seville, Spain, 18-20 September 2018",
        "Iliev, A.I., Stanchev, L.P., “Information Retrieval and Recommendation Using Emotion from Speech Signals”, In: 2018 IEEE Conference on Multimedia Information Processing and Retrieval, Miami, FL, USA, April 10-12, 2018, pp. 222-225, DOI:10.1109/MIPR.2018.00054",
        "Marinova, D.P., Iliev, A.I., Pavlov, R.D., Zlatkov, L.Ch., “Towards Increasing and Personalizing of User Experience in the Digital Culture Ecosystem”, International Journal of Applied Engineering Research, ISSN 0973- 4562 Volume 13, Number 6 (2018) pp. 4227-4231",
        "Stanchev, P.L., Marinova, D.P., Iliev, A.I., “Enhanced User Experience and Behavioral Patterns for Digital Cultural Ecosystems”, The 9th International Conference on Management of Digital EcoSystems (MEDES’17), Bangkok, Thailand, 7-10.Nov.2017, indexed in ACM, ISBN:978-1-4503-4895-9, pp. 288-293",
        "Iliev, A.I., Stanchev, P.L., “Smart multifunctional digital content ecosystem using emotion analysis of voice”, 18th International Conference on Computer Systems and Technologies CompSysTech’17, Ruse, Bulgaria – June.22- 24.2017, ACM, ISBN 978-1-4503-5234-5, Volume 1369, pp.58-64, ISBN: 978-1-4503-5234-5",
        "Iliev, A.I., Stanchev, P., “Personalizing content using voice in a digital asset ecosystem”, IJIRSET International Journal of Innovative Research in Science, Engineering and Technology, Vol. 5, Issue 12, pp. 20260-20267, December 2016",
        "Iliev, A.I., “Emotion Recognition in Speech using Inter-Sentence Time-Domain Statistics”, IJIRSET International Journal of Innovative Research in Science, Engineering and Technology, Vol. 5, Issue 3, pp. 3245-3254, March 2016",
        "Iliev, A.I., “Feature vectors for emotion recognition in speech”, National Informatics Conference, Sofia, Bulgaria: Bulgarian Academy of Sciences, Mathematics and Informatics Department, 2016, pp. 225-238",
        "Iliev, A.I. (2012), “Emotion Recognition From Speech”, Monograph, Lambert Academic Publishing, ISBN: 978- 3-8473-7760-3",
        "Iliev, A.I., Scordilis, M.S., “Spoken Emotion Recognition Using Glottal Symmetry”, EURASIP Journal on Advances in Signal Processing, Volume 2011, Article ID 624575, ISSN: 1687-6180, DOI:10.1155/2011/624575",
        "Iliev, A.I., Scordilis, M.S., Papa J.P., Falcão A.X., “Spoken emotion recognition through optimum-path forest classification using glottal features”, Journal on Computer Speech and Language, ELSEVIER, Vol. 24, Issue 3, 2010, pp. 445-460, ISSN: 0885-2308",
        "Iliev, A.I., Scordilis, M.S., “Emotion Recognition in Speech using Inter-Sentence Glottal Statistics”, Proceedings of the 15th International Conference on systems, Signals and Image Processing, IEEE-IWSSIP 2008, Bratislava, Slovakia, June 25-28, 2008, pp. 465-468",
        "Iliev, A.I., Zhang, Y., Scordilis, M.S., “Spoken Emotion Classification Using ToBI Features and GMM”, Proceedings of the 14th International Workshop on Signals and Image Processing 2007 and the 6th EURASIP Conference focused on Speech and Image Processing, Multimedia Communications and Services. IEEE- IWSSIP 2007, Maribor, Slovenia, June 27-30, 2007, pp. 495-498, ISSN: 16874722, 16874714",
        "Iliev, A.I., He, X., Scordilis, M.S., “A High Capacity Watermarking Technique for Stereo Audio”, Proceedings of the IEEE International Conference on Acoustics Speech and Signal Processing, ICASSP2004, Montreal, Canada, 17-24 May 2004, Vol. 5, pp. 393-396, ISBN: 0-7803-8484-9, ISSN: 0736-7791",
        "Iliev, A.I., Scordilis, M.S., “Multi level High Capacity Data Hiding Technique for Stereo Audio”, Proceedings of the 2004 IEEE-Asilomar Conference, Pacific Grove, California, November 7-10, 2004, pp. 1793-1797, ISBN: 0- 7803-8622-1, ISSN: 1058-6393",
        "Jin, W., Scordilis, M.S., Iliev., A.I., “Comparison and implementation of a 16-bit fixed point audio resampler”, Proceedings of the 2004 IEEE-Asilomar Conference, Pacific Grove, California, November 7-10, 2004, pp. 1798-1800, ISBN: 0-7803-8622-1",
        "Iliev, A.I., Scordilis, M.S., “Binaural Phase Masking Experiments in Stereo Audio”, Proceedings of the First Pan- American/Iberian Meeting on Acoustics, Cancun, Mexico, The Journal of the Acoustical Society of America, Nov.01.2002, Vol.112, Issue 5, pp. 2273-2274"
    ];

    const publicationsList = document.getElementById('publications-list');

    // Append text to an element, turning [text](url) markdown links into anchors
    const appendWithLinks = (el, text) => {
        const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
        let lastIndex = 0;
        for (const match of text.matchAll(linkPattern)) {
            el.append(text.slice(lastIndex, match.index));
            const a = document.createElement('a');
            a.href = match[2];
            a.textContent = match[1];
            a.className = 'link';
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            el.append(a);
            lastIndex = match.index + match[0].length;
        }
        el.append(text.slice(lastIndex));
    };

    // Derive display fields from a raw citation string; the citation text itself is shown unchanged
    const parsePublication = (raw) => {
        const clean = raw.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '').replace(/https?:\/\/\S+/g, '')
            .replace(/DOI:?\s*10\.\S+/gi, '').replace(/IS[BS]N:?\s*[\d\s-]+/gi, '');
        const years = (clean.match(/\b(199\d|20[0-3]\d)\b/g) || []).map(Number);

        let title = null;
        const quoted = raw.match(/[“"]([^”"]{12,})[”"]/);
        const apa = raw.match(/^.*?\(\d{4}[^)]*\)\.?\s+(.+?[.?])\s+[A-Z]/);
        const authorsEnd = raw.match(/^(.+?(?:\.\.|[a-zà-ÿ]{3}\.|[a-z]{3,} [A-Z]\.[A-Z]\.))\s+(?=[A-Z])/);
        if (quoted) {
            title = quoted[1];
        } else if (apa) {
            title = apa[1];
        } else if (authorsEnd) {
            const rest = raw.slice(authorsEnd[0].length);
            const book = rest.match(/^(.+?)(?:,|\.)\s+(?:LAP )?Lambert/);
            const sentence = rest.match(/^(.+?[.?])\s+(?=[A-Z])/);
            title = book ? book[1] : sentence ? sentence[1] : null;
        }
        if (title) title = title.replace(/[.,]$/, '').trim();

        let type = 'journal';
        if (/Lambert|Monograph|Chapter/i.test(raw)) type = 'book';
        else if (/Comptes Rendus/.test(raw)) type = 'journal';
        else if (/Conference|Proceedings|Proc\.|Symposium|Workshop|Meeting|MEDES|CompSysTech|\(SAI\)|SAI 20|ICASSP|Asilomar|Intelligent Computing|Digital Presentation and Preservation/i.test(raw)) type = 'conference';

        const doiMatch = raw.match(/(?:doi\.org\/|DOI:?\s*)(10\.\d{4,}\/[^\s,]+)/i);
        let doi = doiMatch ? doiMatch[1].replace(/[.,;)]+$/, '') : null;
        if (doi && doi.endsWith('-')) doi = null;

        return {
            raw,
            title,
            type,
            year: years.length ? Math.max(...years) : null,
            quartile: (raw.match(/\bQ[1-4]\b/) || [])[0] || null,
            sjr: (raw.match(/SJR[^:\d]*:?\s*(\d+\.\d+)/) || [])[1] || null,
            scopus: /SJR|\(Scopus\)|Indexed in Scopus/.test(raw) && !/consideration/i.test(raw),
            wos: /\(Web of Science\)/.test(raw) && !/consideration/i.test(raw),
            doi,
        };
    };

    // Citation without the title (shown separately as the heading)
    const citationWithoutTitle = (pub) => {
        if (!pub.title) return pub.raw;
        const escaped = pub.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return pub.raw.replace(new RegExp(`[“"]?${escaped}[.,]?[”"]?`), '')
            .replace(/\s+,/g, ',').replace(/,\s*,/g, ',').replace(/\.\s*\./g, '.').replace(/\s{2,}/g, ' ').trim();
    };

    const TYPE_LABELS = { journal: 'Journal Article', conference: 'Conference Paper', book: 'Book / Chapter' };
    const TOPICS = {
        deepfake: /deepfake/i,
        audio: /speech|audio|emotion|acoustic|watermark|sound|voice|glottal|binaural/i,
        ai: /LLM|language model|retrieval-augmented|neural|deep learning|machine learning|artificial intelligence|\bAI\b|symbolic/i,
        health: /health|diabet|stroke|wellness|nutrition|motor|children|biomedical|liver/i,
    };
    const ICONS = {
        copy: '<rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />',
        open: '<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />',
    };
    const el = (tag, className, text) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text != null) node.textContent = text;
        return node;
    };
    const iconButton = (tag, label, icon) => {
        const node = el(tag, 'pub-btn');
        node.innerHTML = `<svg viewBox="0 0 24 24">${ICONS[icon]}</svg>`;
        node.append(label);
        return node;
    };

    const parsedPublications = publications.map(parsePublication);
    const latestYear = Math.max(...parsedPublications.map(p => p.year || 0));

    const renderPublication = (pub, index) => {
        const card = el('article', 'pub-card');
        card.dataset.type = pub.type;
        card.dataset.topics = Object.keys(TOPICS).filter(key => TOPICS[key].test(pub.raw)).join(' ');

        const side = el('div', 'pub-side');
        side.append(el('span', `pub-year${pub.year === latestYear ? ' is-latest' : ''}`, pub.year || '—'));
        side.append(el('span', 'pub-kind', pub.type === 'book' ? 'Book' : pub.type === 'conference' ? 'Conference' : 'Journal'));
        const sideBadges = el('div', 'pub-side-badges');
        if (pub.quartile) sideBadges.append(el('span', 'pub-badge is-strong', pub.quartile));
        if (pub.sjr) sideBadges.append(el('span', 'pub-badge', `SJR ${pub.sjr}`));
        if (sideBadges.children.length) side.append(sideBadges);

        const main = el('div', 'pub-main');
        const pills = el('div', 'pub-pills');
        if (pub.scopus) pills.append(el('span', 'pub-pill is-primary', 'Scopus'));
        if (pub.wos) pills.append(el('span', 'pub-pill is-tertiary', 'Web of Science'));
        if (pills.children.length) main.append(pills);
        if (pub.title) main.append(el('h3', 'pub-title', pub.title));
        const citation = el('p', 'pub-citation');
        appendWithLinks(citation, citationWithoutTitle(pub));
        main.append(citation);

        const footer = el('div', 'pub-footer');
        const actions = el('div', 'pub-actions');
        const copy = iconButton('button', 'Copy Citation', 'copy');
        copy.type = 'button';
        copy.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(pub.raw.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '$2'));
                copy.lastChild.textContent = 'Copied';
            } catch {
                copy.lastChild.textContent = 'Copy failed';
            }
            setTimeout(() => { copy.lastChild.textContent = 'Copy Citation'; }, 1600);
        });
        actions.append(copy);
        if (pub.doi) {
            const doi = iconButton('a', 'DOI Link', 'open');
            doi.href = `https://doi.org/${pub.doi}`;
            doi.target = '_blank';
            doi.rel = 'noopener noreferrer';
            actions.append(doi);
        }
        footer.append(actions, el('span', 'pub-meta', `${TYPE_LABELS[pub.type]} · #${index + 1}`));
        main.append(footer);

        card.append(side, main);
        return card;
    };

    if (publicationsList) {
        const cards = parsedPublications.map(renderPublication);
        publicationsList.append(...cards);

        const pubStats = {
            total: parsedPublications.length,
            first: Math.min(...parsedPublications.map(p => p.year || Infinity)),
            indexed: parsedPublications.filter(p => p.scopus || p.wos).length,
            conference: parsedPublications.filter(p => p.type === 'conference').length,
            books: parsedPublications.filter(p => p.type === 'book').length,
        };
        document.querySelectorAll('[data-pub-stat]').forEach(node => {
            node.textContent = pubStats[node.dataset.pubStat];
        });

        const typeCounts = { all: cards.length };
        cards.forEach(card => { typeCounts[card.dataset.type] = (typeCounts[card.dataset.type] || 0) + 1; });
        document.querySelectorAll('.pub-chip[data-type]').forEach(btn => {
            btn.append(` (${typeCounts[btn.dataset.type] || 0})`);
        });
        document.querySelectorAll('.pub-chip[data-topic]').forEach(btn => {
            if (btn.dataset.topic === 'all') return;
            btn.append(` (${cards.filter(card => card.dataset.topics.includes(btn.dataset.topic)).length})`);
        });

        const PAGE_SIZE = 15;
        let pubTopic = 'all';
        let pubType = 'all';
        let showAll = false;
        const pubSearch = document.getElementById('pub-search');
        const pubEmpty = document.querySelector('.pub-empty');
        const pubMore = document.querySelector('.pub-more');
        const applyPubFilters = () => {
            const query = pubSearch.value.trim().toLowerCase();
            const filtering = query || pubTopic !== 'all' || pubType !== 'all';
            let shown = 0;
            let matched = 0;
            cards.forEach(card => {
                const match = (pubTopic === 'all' || card.dataset.topics.includes(pubTopic))
                    && (pubType === 'all' || card.dataset.type === pubType)
                    && card.textContent.toLowerCase().includes(query);
                if (match) matched++;
                const show = match && (filtering || showAll || matched <= PAGE_SIZE);
                card.style.display = show ? '' : 'none';
                if (show) shown++;
            });
            pubEmpty.hidden = matched > 0;
            pubMore.hidden = filtering || showAll || matched <= PAGE_SIZE;
            pubMore.textContent = `Show all ${matched} publications`;
        };
        const bindChips = (attr, setter) => {
            const chips = document.querySelectorAll(`.pub-chip[data-${attr}]`);
            chips.forEach(chip => chip.addEventListener('click', () => {
                chips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                setter(chip.dataset[attr]);
                applyPubFilters();
            }));
        };
        bindChips('topic', value => { pubTopic = value; });
        bindChips('type', value => { pubType = value; });
        pubSearch.addEventListener('input', applyPubFilters);
        pubMore.addEventListener('click', () => { showAll = true; applyPubFilters(); });
        applyPubFilters();
    }

    // Keep About stats in sync with the other tabs' content
    const statCounts = {
        publications: publications.length,
        patents: document.querySelectorAll('#patents .patent-card').length,
        projects: document.querySelectorAll('#projects .project-card').length,
    };
    document.querySelectorAll('[data-stat]').forEach(el => {
        const count = statCounts[el.dataset.stat];
        if (count) el.textContent = count;
    });

    // Experience: live counts and category filter
    const expItems = document.querySelectorAll('.exp-item');
    const expCounts = { all: expItems.length };
    expItems.forEach(item => {
        expCounts[item.dataset.category] = (expCounts[item.dataset.category] || 0) + 1;
    });
    document.querySelectorAll('[data-filter-count]').forEach(el => {
        el.textContent = expCounts[el.dataset.filterCount] || 0;
    });
    const expStats = {
        years: new Date().getFullYear() - 1999,
        current: document.querySelectorAll('.exp-item.is-current').length,
        total: expItems.length,
    };
    document.querySelectorAll('[data-exp]').forEach(el => {
        el.textContent = expStats[el.dataset.exp];
    });

    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            expItems.forEach(item => {
                const show = btn.dataset.filter === 'all' || item.dataset.category === btn.dataset.filter;
                item.style.display = show ? '' : 'none';
            });
        });
    });

    // Projects: status from end date, live counts, filter and search
    const projectCards = [...document.querySelectorAll('.project-card')];
    const now = new Date();
    const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    projectCards.forEach(card => {
        if (!card.dataset.end) return;
        const active = card.dataset.end >= thisMonth;
        card.classList.toggle('is-active', active);
        card.querySelector('.status-text').textContent = active ? 'Active' : 'Concluded';
    });
    const projectMatches = {
        all: () => true,
        active: card => card.classList.contains('is-active'),
        concluded: card => card.dataset.end && !card.classList.contains('is-active'),
        virtech: card => card.dataset.org === 'virtech',
    };
    document.querySelectorAll('[data-proj-count]').forEach(el => {
        el.textContent = projectCards.filter(projectMatches[el.dataset.projCount]).length;
    });
    const projectStats = {
        total: projectCards.length,
        active: projectCards.filter(projectMatches.active).length,
        framework: projectCards.filter(card => card.dataset.framework).length,
    };
    document.querySelectorAll('[data-proj]').forEach(el => {
        el.textContent = projectStats[el.dataset.proj];
    });

    let projectFilter = 'all';
    const projectSearch = document.getElementById('project-search');
    const projectEmpty = document.querySelector('.project-empty');
    const applyProjectFilter = () => {
        const query = projectSearch.value.trim().toLowerCase();
        let shown = 0;
        projectCards.forEach(card => {
            const show = projectMatches[projectFilter](card) && card.textContent.toLowerCase().includes(query);
            card.style.display = show ? '' : 'none';
            if (show) shown++;
        });
        projectEmpty.hidden = shown > 0;
    };
    document.querySelectorAll('[data-project-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-project-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            projectFilter = btn.dataset.projectFilter;
            applyProjectFilter();
        });
    });
    projectSearch.addEventListener('input', applyProjectFilter);

    // Education: counts from the cards themselves
    const eduStats = {
        degrees: document.querySelectorAll('.degree-card').length,
        fellowships: document.querySelectorAll('.fellow-card').length,
    };
    document.querySelectorAll('[data-edu-stat]').forEach(node => {
        node.textContent = eduStats[node.dataset.eduStat];
    });

    // Patents: live counts, jurisdiction filter and search
    const patentCards = [...document.querySelectorAll('.patent-card')];
    const patentMatches = {
        all: () => true,
        us: card => card.dataset.jurisdiction === 'us',
        bg: card => card.dataset.jurisdiction === 'bg',
    };
    document.querySelectorAll('[data-patent-count], [data-patent-stat]').forEach(node => {
        const key = node.dataset.patentCount || node.dataset.patentStat;
        node.textContent = patentCards.filter(patentMatches[key]).length;
    });
    let patentFilter = 'all';
    const patentSearch = document.getElementById('patent-search');
    const patentEmpty = document.querySelector('.patent-empty');
    const applyPatentFilter = () => {
        const query = patentSearch.value.trim().toLowerCase();
        let shown = 0;
        patentCards.forEach(card => {
            const show = patentMatches[patentFilter](card) && card.textContent.toLowerCase().includes(query);
            card.style.display = show ? '' : 'none';
            if (show) shown++;
        });
        patentEmpty.hidden = shown > 0;
    };
    document.querySelectorAll('[data-patent-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('[data-patent-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            patentFilter = btn.dataset.patentFilter;
            applyPatentFilter();
        });
    });
    patentSearch.addEventListener('input', applyPatentFilter);

    // Awards: each attendance period counts as its own award
    const awardTotal = document.querySelectorAll('.award-card:not(.is-merit)').length
        + document.querySelectorAll('.award-period').length;
    document.querySelectorAll('[data-award-stat="total"]').forEach(node => {
        node.textContent = awardTotal;
    });

    // Tab Switching Logic
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.section-container');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('active-section');
            });

            // Show target section
            const targetId = tab.getAttribute('data-tab');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.style.display = 'block';
                // Trigger animation reflow
                void targetSection.offsetWidth;
                targetSection.classList.add('active-section');
            }
        });
    });
});
