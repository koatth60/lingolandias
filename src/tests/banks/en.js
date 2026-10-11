// English placement test bank. Levels follow CEFR descriptors; British English.
export default {
  lang: "en",
  voice: "en-GB", // BCP-47 tag for speechSynthesis

  // ---------------------------------------------------------------------------
  // ROUTING: exactly 2 items per level
  // ---------------------------------------------------------------------------
  routing: [
    { id: "r-a1-1", level: "A1", skill: "grammar", type: "mcq", stem: "My sister ___ a nurse.", options: ["is", "are", "am", "be"], answer: 0 },
    { id: "r-a1-2", level: "A1", skill: "vocabulary", type: "mcq", stem: "I'm hungry. Can we have ___ now?", options: ["a shower", "a bus", "lunch", "a pen"], answer: 2 },

    { id: "r-a2-1", level: "A2", skill: "grammar", type: "mcq", stem: "We ___ to Spain on holiday last summer.", options: ["go", "went", "have gone", "were go"], answer: 1 },
    { id: "r-a2-2", level: "A2", skill: "vocabulary", type: "mcq", stem: "This jacket is too ___. Have you got it in a larger size?", options: ["big", "long", "small", "expensive"], answer: 2 },

    { id: "r-b1-1", level: "B1", skill: "grammar", type: "mcq", stem: "I ___ in this flat since 2019.", options: ["live", "lived", "have lived", "am living"], answer: 2 },
    { id: "r-b1-2", level: "B1", skill: "vocabulary", type: "mcq", stem: "Could you ___ the children after school on Tuesday? I'll be at work until six.", options: ["look for", "look up", "look into", "look after"], answer: 3 },

    { id: "r-b2-1", level: "B2", skill: "grammar", type: "mcq", stem: "If she ___ the earlier bus, she wouldn't have missed the interview.", options: ["caught", "had caught", "would catch", "has caught"], answer: 1 },
    { id: "r-b2-2", level: "B2", skill: "vocabulary", type: "mcq", stem: "The new manager has ___ a number of changes to the staff rota.", options: ["done", "taken", "made", "put"], answer: 2 },

    { id: "r-c1-1", level: "C1", skill: "grammar", type: "mcq", stem: "Not until the results were published ___ how serious the problem was.", options: ["we realised", "we had realised", "realised we", "did we realise"], answer: 3 },
    { id: "r-c1-2", level: "C1", skill: "vocabulary", type: "mcq", stem: "The council's decision to close the library ___ widespread criticism.", options: ["pulled", "drew", "gained", "lifted"], answer: 1 },

    { id: "r-c2-1", level: "C2", skill: "grammar", type: "mcq", stem: "___ it not been for her quick thinking, the situation could have been far worse.", options: ["Were", "Should", "Had", "Did"], answer: 2 },
    { id: "r-c2-2", level: "C2", skill: "vocabulary", type: "mcq", stem: "Her argument was so ___ that even her fiercest critics conceded the point.", options: ["cogent", "copious", "candid", "callous"], answer: 0 },
  ],

  // ---------------------------------------------------------------------------
  // CORE: 10 items per level
  // ---------------------------------------------------------------------------
  core: [
    // A1 ---------------------------------------------------------------------
    { id: "c-a1-01", level: "A1", skill: "grammar", type: "mcq", stem: "___ you like coffee?", options: ["Do", "Are", "Does", "Is"], answer: 0 },
    { id: "c-a1-02", level: "A1", skill: "grammar", type: "mcq", stem: "There ___ two bedrooms in my flat.", options: ["is", "be", "are", "has"], answer: 2 },
    { id: "c-a1-03", level: "A1", skill: "grammar", type: "mcq", stem: "He ___ to work by bus every day.", options: ["go", "going", "is go", "goes"], answer: 3 },
    { id: "c-a1-04", level: "A1", skill: "grammar", type: "mcq", stem: "I've got ___ appointment with the doctor at ten.", options: ["a", "an", "some", "any"], answer: 1 },
    { id: "c-a1-05", level: "A1", skill: "vocabulary", type: "mcq", stem: "The supermarket opens at eight o'clock in the ___.", options: ["morning", "night", "week", "year"], answer: 0 },
    { id: "c-a1-06", level: "A1", skill: "vocabulary", type: "mcq", stem: "My mother's brother is my ___.", options: ["cousin", "nephew", "uncle", "grandfather"], answer: 2 },
    { id: "c-a1-07", level: "A1", skill: "vocabulary", type: "mcq", stem: "It's very cold today. Put on your ___.", options: ["shorts", "sandals", "sunglasses", "coat"], answer: 3 },
    { id: "c-a1-08", level: "A1", skill: "grammar", type: "gap", prompt: "Write ONE word.", stem: "Where ___ you from? — I'm from Poland.", answers: ["are"] },
    { id: "c-a1-09", level: "A1", skill: "grammar", type: "gap", prompt: "Write ONE word.", stem: "She ___ got two children, a boy and a girl.", answers: ["has"] },
    { id: "c-a1-10", level: "A1", skill: "grammar", type: "gap", prompt: "Write the correct form of the verb in brackets.", stem: "My brother ___ (work) in a hospital.", answers: ["works"] },

    // A2 ---------------------------------------------------------------------
    { id: "c-a2-01", level: "A2", skill: "grammar", type: "mcq", stem: "I ___ TV when the phone rang.", options: ["was watching", "watched", "am watching", "have watched"], answer: 0 },
    { id: "c-a2-02", level: "A2", skill: "grammar", type: "mcq", stem: "My new flat is ___ than my old one.", options: ["more big", "biggest", "more bigger", "bigger"], answer: 3 },
    { id: "c-a2-03", level: "A2", skill: "grammar", type: "mcq", stem: "Look at those dark clouds! It ___ rain.", options: ["is going to", "goes to", "will to", "is raining to"], answer: 0 },
    { id: "c-a2-04", level: "A2", skill: "grammar", type: "mcq", stem: "How ___ money do you need for the trip?", options: ["many", "lot", "few", "much"], answer: 3 },
    { id: "c-a2-05", level: "A2", skill: "vocabulary", type: "mcq", stem: "I need to ___ an appointment with the dentist.", options: ["do", "put", "make", "give"], answer: 2 },
    { id: "c-a2-06", level: "A2", skill: "vocabulary", type: "mcq", stem: "The train was ___, so we arrived an hour late.", options: ["full", "delayed", "early", "quiet"], answer: 1 },
    { id: "c-a2-07", level: "A2", skill: "vocabulary", type: "mcq", stem: "Excuse me, how much does this shirt ___?", options: ["cost", "pay", "spend", "buy"], answer: 0 },
    { id: "c-a2-08", level: "A2", skill: "grammar", type: "gap", prompt: "Write ONE word.", stem: "We went to the cinema ___ Saturday evening.", answers: ["on"] },
    { id: "c-a2-09", level: "A2", skill: "grammar", type: "gap", prompt: "Write the correct form of the verb in brackets.", stem: "Yesterday I ___ (buy) a new phone.", answers: ["bought"] },
    { id: "c-a2-10", level: "A2", skill: "grammar", type: "gap", prompt: "Write the correct form of the word in brackets.", stem: "My dad is the ___ (tall) person in our family.", answers: ["tallest"] },

    // B1 ---------------------------------------------------------------------
    { id: "c-b1-01", level: "B1", skill: "grammar", type: "mcq", stem: "Have you ever ___ to Scotland?", options: ["went", "be", "been", "go"], answer: 2 },
    { id: "c-b1-02", level: "B1", skill: "grammar", type: "mcq", stem: "If I ___ more free time, I'd learn to drive.", options: ["have", "had", "would have", "will have"], answer: 1 },
    { id: "c-b1-03", level: "B1", skill: "grammar", type: "mcq", stem: "You ___ wear a seatbelt in the back of a taxi. It's the law.", options: ["don't have to", "mustn't", "needn't", "must"], answer: 3 },
    { id: "c-b1-04", level: "B1", skill: "grammar", type: "mcq", stem: "I ___ him since we left school.", options: ["didn't see", "haven't seen", "don't see", "wasn't seeing"], answer: 1 },
    { id: "c-b1-05", level: "B1", skill: "grammar", type: "mcq", stem: "If it rains tomorrow, we ___ the barbecue.", options: ["would cancel", "cancelled", "will cancel", "had cancelled"], answer: 2 },
    { id: "c-b1-06", level: "B1", skill: "vocabulary", type: "mcq", stem: "The meeting has been ___ until next week because the manager is ill.", options: ["put off", "put out", "put up", "put on"], answer: 0 },
    { id: "c-b1-07", level: "B1", skill: "vocabulary", type: "mcq", stem: "Can you ___ me a favour and post this letter?", options: ["make", "do", "give", "take"], answer: 1 },
    { id: "c-b1-08", level: "B1", skill: "vocabulary", type: "mcq", stem: "Our landlord has ___ the rent by £50 a month.", options: ["rose", "grown", "lifted up", "raised"], answer: 3 },
    { id: "c-b1-09", level: "B1", skill: "grammar", type: "gap", prompt: "Write ONE word.", stem: "I'm really looking forward ___ seeing you at the weekend.", answers: ["to"] },
    { id: "c-b1-10", level: "B1", skill: "grammar", type: "gap", prompt: "Write the correct form of the verb in brackets.", stem: "Have you finished ___ (paint) the kitchen yet?", answers: ["painting"] },

    // B2 ---------------------------------------------------------------------
    { id: "c-b2-01", level: "B2", skill: "grammar", type: "mcq", stem: "The parcel ___ to the wrong address yesterday.", options: ["delivered", "was delivered", "has delivered", "was delivering"], answer: 1 },
    { id: "c-b2-02", level: "B2", skill: "grammar", type: "mcq", stem: "On Monday she told me she ___ the report the following day.", options: ["will finish", "finishes", "has finished", "would finish"], answer: 3 },
    { id: "c-b2-03", level: "B2", skill: "grammar", type: "mcq", stem: "I wish I ___ so much at the party last night. I feel awful.", options: ["hadn't eaten", "didn't eat", "wouldn't eat", "haven't eaten"], answer: 0 },
    { id: "c-b2-04", level: "B2", skill: "grammar", type: "mcq", stem: "By the time we got to the station, the train ___.", options: ["already left", "already leaves", "had already left", "has already left"], answer: 2 },
    { id: "c-b2-05", level: "B2", skill: "grammar", type: "mcq", stem: "You ___ have told me you were coming. I'd have made dinner!", options: ["must", "would", "should", "can"], answer: 2 },
    { id: "c-b2-06", level: "B2", skill: "vocabulary", type: "mcq", stem: "The company is ___ a lot of pressure to cut costs this year.", options: ["under", "on", "in", "at"], answer: 0 },
    { id: "c-b2-07", level: "B2", skill: "vocabulary", type: "mcq", stem: "I'd like to ___ a complaint about the noise from the flat upstairs.", options: ["make", "do", "say", "tell"], answer: 0 },
    { id: "c-b2-08", level: "B2", skill: "vocabulary", type: "mcq", stem: "Could you ___ me of the date of my next appointment?", options: ["remind", "remember", "recall", "memorise"], answer: 0 },
    { id: "c-b2-09", level: "B2", skill: "grammar", type: "gap", prompt: "Write ONE word.", stem: "If I ___ known about the delay, I would have taken a later train.", answers: ["had", "'d"] },
    { id: "c-b2-10", level: "B2", skill: "vocabulary", type: "gap", prompt: "Write the correct form of the word in brackets.", stem: "The ___ (construct) of the new bridge took three years.", answers: ["construction"] },

    // C1 ---------------------------------------------------------------------
    { id: "c-c1-01", level: "C1", skill: "grammar", type: "mcq", stem: "Had I known how demanding the job would be, I ___ it.", options: ["wouldn't accept", "wouldn't have accepted", "didn't accept", "hadn't accepted"], answer: 1 },
    { id: "c-c1-02", level: "C1", skill: "grammar", type: "mcq", stem: "If I had taken that job in London, I ___ there now.", options: ["would have been living", "will be living", "would be living", "had been living"], answer: 2 },
    { id: "c-c1-03", level: "C1", skill: "grammar", type: "mcq", stem: "Rarely ___ such a talented young player.", options: ["have I seen", "I have seen", "I did see", "saw I"], answer: 0 },
    { id: "c-c1-04", level: "C1", skill: "grammar", type: "mcq", stem: "___ the train strike, almost all staff made it to the conference.", options: ["Although", "However", "Even though", "Despite"], answer: 3 },
    { id: "c-c1-05", level: "C1", skill: "grammar", type: "mcq", stem: "It's high time the government ___ something about housing costs.", options: ["did", "does", "will do", "has done"], answer: 0 },
    { id: "c-c1-06", level: "C1", skill: "vocabulary", type: "mcq", stem: "After months of talks, both sides gave a little ground and finally reached a ___.", options: ["middle", "compromise", "standstill", "halfway"], answer: 1 },
    { id: "c-c1-07", level: "C1", skill: "vocabulary", type: "mcq", stem: "The minister's comments ___ a storm of protest.", options: ["sparked", "lit", "fired", "burnt"], answer: 0 },
    { id: "c-c1-08", level: "C1", skill: "vocabulary", type: "mcq", stem: "His explanation doesn't really ___ water; there are too many gaps in it.", options: ["carry", "keep", "hold", "bear"], answer: 2 },
    { id: "c-c1-09", level: "C1", skill: "vocabulary", type: "gap", prompt: "Write the correct form of the word in brackets.", stem: "The campaign was a complete failure, and critics pointed to its total ___ (effective).", answers: ["ineffectiveness"] },
    { id: "c-c1-10", level: "C1", skill: "grammar", type: "gap", prompt: "Write ONE word.", stem: "Little ___ she know that her life was about to change completely.", answers: ["did"] },

    // C2 ---------------------------------------------------------------------
    { id: "c-c2-01", level: "C2", skill: "grammar", type: "mcq", stem: "___ the board approve the merger, the share price is expected to rise sharply.", options: ["Were", "Should", "Had", "Would"], answer: 1 },
    { id: "c-c2-02", level: "C2", skill: "grammar", type: "mcq", stem: "It is imperative that she ___ informed before the announcement is made.", options: ["was", "will be", "is being", "be"], answer: 3 },
    { id: "c-c2-03", level: "C2", skill: "grammar", type: "mcq", stem: "The proposal, ___ merits are considerable, has nonetheless been shelved.", options: ["which", "whose", "that its", "whom"], answer: 1 },
    { id: "c-c2-04", level: "C2", skill: "grammar", type: "mcq", stem: "I'd sooner you ___ mention this to anyone just yet.", options: ["don't", "didn't", "wouldn't", "won't"], answer: 1 },
    { id: "c-c2-05", level: "C2", skill: "vocabulary", type: "mcq", stem: "The report was criticised for its ___ use of statistics, which seemed designed to mislead.", options: ["ingenuous", "ingenious", "disingenuous", "indigenous"], answer: 2 },
    { id: "c-c2-06", level: "C2", skill: "vocabulary", type: "mcq", stem: "Rather than tackle the issue head-on, the council seems content to ___ the can down the road.", options: ["kick", "roll", "push", "throw"], answer: 0 },
    { id: "c-c2-07", level: "C2", skill: "vocabulary", type: "mcq", stem: "She has an ___ knowledge of eighteenth-century French literature; few scholars know more.", options: ["prolific", "encyclopaedic", "voluminous", "exhausting"], answer: 1 },
    { id: "c-c2-08", level: "C2", skill: "vocabulary", type: "mcq", stem: "The government has been accused of ___ its responsibilities to the poorest households.", options: ["abating", "abstaining", "abducting", "abdicating"], answer: 3 },
    { id: "c-c2-09", level: "C2", skill: "vocabulary", type: "gap", prompt: "Write the correct form of the word in brackets.", stem: "The charity's aims are ___ (commend), but its methods are questionable.", answers: ["commendable"] },
    { id: "c-c2-10", level: "C2", skill: "grammar", type: "gap", prompt: "Write ONE word.", stem: "Try ___ she might, she could not persuade the committee to change its mind.", answers: ["as"] },
  ],

  // ---------------------------------------------------------------------------
  // READING: one passage per level, 4 questions each
  // ---------------------------------------------------------------------------
  reading: [
    {
      id: "p-a1",
      level: "A1",
      title: "An email from Anna",
      text:
        "Hi Tom,\n\nI'm in Bristol now! My new flat is small but nice. It has one bedroom, a kitchen and a big window. I work in a café near the station. I start at seven in the morning and finish at three. On Saturdays I don't work, so I go to the park with my friend Leila. She's from Egypt and she's a teacher. Can you visit me next month?\n\nLove,\nAnna",
      items: [
        { id: "p-a1-1", skill: "reading", type: "mcq", stem: "Where does Anna work?", options: ["In a school", "In a café", "At the station", "In a park"], answer: 1 },
        { id: "p-a1-2", skill: "reading", type: "mcq", stem: "What time does Anna finish work?", options: ["At three", "At seven", "At eight", "At six"], answer: 0 },
        { id: "p-a1-3", skill: "reading", type: "mcq", stem: "What does Anna do on Saturdays?", options: ["She works in the café", "She visits Tom", "She goes to the park", "She teaches"], answer: 2 },
        { id: "p-a1-4", skill: "reading", type: "mcq", stem: "Who is Leila?", options: ["Anna's sister", "Anna's boss", "Tom's teacher", "Anna's friend"], answer: 3 },
      ],
    },
    {
      id: "p-a2",
      level: "A2",
      title: "Greenfield Community Centre: Summer Activities",
      text:
        "This summer, Greenfield Community Centre is running free activities for children aged 6 to 12. There are art classes on Monday and Wednesday mornings from 10 to 12, and football in the park on Tuesday and Thursday afternoons. On Fridays we go on trips. Last year we visited a farm and a science museum. Children must bring a packed lunch and a drink on trip days. Before the first activity, parents need to fill in a form. You can get the form from reception or download it from our website. Places are limited, so please book early. The centre is closed on bank holidays.",
      items: [
        { id: "p-a2-1", skill: "reading", type: "mcq", stem: "Who are the activities for?", options: ["Parents and children", "Teenagers", "Children between 6 and 12", "Anyone who lives nearby"], answer: 2 },
        { id: "p-a2-2", skill: "reading", type: "mcq", stem: "When can children play football?", options: ["Monday and Wednesday mornings", "Tuesday and Thursday afternoons", "Friday mornings", "Every day"], answer: 1 },
        { id: "p-a2-3", skill: "reading", type: "mcq", stem: "What must children take on Fridays?", options: ["Money for the museum", "A form", "Football boots", "Food and a drink"], answer: 3 },
        { id: "p-a2-4", skill: "reading", type: "mcq", stem: "What do parents have to do first?", options: ["Pay at reception", "Complete a form", "Phone the centre", "Visit the farm"], answer: 1 },
      ],
    },
    {
      id: "p-b1",
      level: "B1",
      title: "Registering with a GP: one reader's experience",
      text:
        "When I moved to Leeds last year, registering with a doctor was the last thing on my mind. I was busy finding a flat and starting my new job, and I felt perfectly healthy. Then, one Sunday in November, I woke up with a terrible earache. I phoned the nearest surgery on Monday morning, but the receptionist explained that I couldn't book an appointment because I wasn't a registered patient. She told me to fill in a registration form, which I could do online, and said it would take a few days to process. In the end I went to a walk-in centre, where I waited nearly three hours. The nurse was very kind, but I wished I had registered weeks earlier. My advice to anyone who has just moved is simple: register as soon as you have an address. You don't need to be ill, and you usually don't need a passport; a letter with your address on it is often enough. It takes ten minutes and could save you a long wait.",
      items: [
        { id: "p-b1-1", skill: "reading", type: "mcq", stem: "Why hadn't the writer registered with a GP?", options: ["They had no address yet", "They were busy and felt well", "The surgery wasn't taking new patients", "They had lost their passport"], answer: 1 },
        { id: "p-b1-2", skill: "reading", type: "mcq", stem: "What did the receptionist tell the writer to do?", options: ["Go to a walk-in centre", "Phone again later in the week", "Fill in a form", "Bring a passport"], answer: 2 },
        { id: "p-b1-3", skill: "reading", type: "mcq", stem: "What does the writer regret?", options: ["Not registering sooner", "Going to the walk-in centre", "Moving to Leeds", "Phoning on a Monday"], answer: 0 },
        { id: "p-b1-4", skill: "reading", type: "mcq", stem: "According to the writer, what do you usually need in order to register?", options: ["A passport", "A letter from your employer", "An appointment", "Something showing your address"], answer: 3 },
      ],
    },
    {
      id: "p-b2",
      level: "B2",
      title: "Is the office worth the commute?",
      text:
        "For most of my working life, the daily commute was simply something to be endured: forty minutes on a crowded train, a coffee gulped on the platform, and the same journey in reverse every evening. When my company introduced hybrid working, I assumed I would never want to see the office again. Two years on, I'm not so sure.\n\nWorking from home has undoubtedly made my life easier. I save around eight hours a week, I see more of my children, and I get far more done without constant interruptions. Yet something has been lost. New colleagues, in particular, seem to struggle. They have fewer chances to pick up skills by watching experienced staff, and quick questions that would once have been answered in seconds now turn into lengthy email chains. Mistakes that a colleague at the next desk would have spotted straight away can go unnoticed for weeks.\n\nI have also noticed that people I rarely see in person have become, in my mind, little more than names on a screen. When disagreements arise, it is far easier to assume the worst about someone you have never shared a joke with.\n\nNone of this means we should return to five days a week in the office. But it does suggest that the days we spend there should be planned deliberately, around training, collaboration and the kind of informal conversation that no video call can replace.",
      items: [
        { id: "p-b2-1", skill: "reading", type: "mcq", stem: "What did the writer expect when hybrid working was introduced?", options: ["To miss the office", "To prefer working from home permanently", "To look for a new job", "To spend more time commuting"], answer: 1 },
        { id: "p-b2-2", skill: "reading", type: "mcq", stem: "According to the writer, who finds remote working hardest?", options: ["Parents with young children", "Managers", "People who have recently joined the company", "Experienced staff"], answer: 2 },
        { id: "p-b2-3", skill: "reading", type: "mcq", stem: "What does the writer suggest about colleagues who rarely meet in person?", options: ["They are quicker to think badly of each other", "They disagree less often", "They find it easier to settle problems by email", "They mainly argue about workload"], answer: 0 },
        { id: "p-b2-4", skill: "reading", type: "mcq", stem: "What is the writer's main conclusion?", options: ["Staff should return to the office full-time", "Video calls can replace most meetings", "Employers should pay for commuting", "Office days should be organised with a clear purpose"], answer: 3 },
      ],
    },
    {
      id: "p-c1",
      level: "C1",
      title: "The trouble with 'generation rent'",
      text:
        "It has become something of a ritual. Every few months a new survey reveals that young adults are spending an ever larger share of their income on rent, and every few months commentators wring their hands about a lost generation that will never own a home. The figures are real enough, but the narrative that accompanies them is, I would argue, both too gloomy and oddly narrow.\n\nIt is too gloomy because it treats renting as an inherently second-class form of housing. In much of continental Europe, people rent well into middle age without any sense of failure; what makes renting precarious in Britain is not the tenure itself but the weakness of tenants' rights. Short contracts, unpredictable rent rises and the ever-present threat of being asked to leave at two months' notice would make any home feel temporary.\n\nIt is narrow because it frames the problem almost entirely in terms of individual aspiration. Ownership is presented as the natural reward for hard work, and the policy response, predictably, is a succession of schemes designed to help first-time buyers onto the ladder. Such schemes may help some, but by pumping more money into demand without increasing supply, they risk pushing prices higher still.\n\nIf we were serious about the well-being of the millions who rent, we would start not with deposits but with security: longer tenancies, limits on mid-contract increases and a properly funded system for enforcing standards. None of this is glamorous, and none of it will make for a triumphant photo opportunity outside a show home. But it would make renting what it ought to be: a reasonable choice rather than a waiting room.",
      items: [
        { id: "p-c1-1", skill: "reading", type: "mcq", stem: "What is the writer's attitude to the usual coverage of rising rents?", options: ["The statistics are unreliable", "The figures are accurate but the conclusions drawn from them are flawed", "The problem is being exaggerated on purpose", "Commentators show little interest in the subject"], answer: 1 },
        { id: "p-c1-2", skill: "reading", type: "mcq", stem: "Why does the writer mention continental Europe?", options: ["To show that renting need not feel insecure", "To argue that rents are lower there", "To criticise European housing policy", "To suggest that British tenants should move abroad"], answer: 0 },
        { id: "p-c1-3", skill: "reading", type: "mcq", stem: "What is the writer's main concern about schemes for first-time buyers?", options: ["They cost the government too much", "They exclude people in middle age", "They may make housing even less affordable", "They encourage people to rent for longer"], answer: 2 },
        { id: "p-c1-4", skill: "reading", type: "mcq", stem: "What does the phrase 'a waiting room' in the final sentence suggest about renting at present?", options: ["It is comfortable but dull", "It is becoming more popular", "It brings people together", "It is seen as a temporary stage before something better"], answer: 3 },
      ],
    },
    {
      id: "p-c2",
      level: "C2",
      title: "In defence of plain speaking",
      text:
        "There is a particular kind of sentence that has colonised the modern workplace. It announces that a team will be 'leveraging synergies going forward', or that a decision has been 'paused pending further review', and it manages, with remarkable efficiency, to say almost nothing at all. It is tempting to dismiss such language as merely irritating, the verbal equivalent of a beige office carpet. I have come to think it is rather more insidious than that.\n\nJargon of this sort is not, for the most part, a failure of communication; it is a strategy. A manager who writes that a project has been 'reprioritised' rather than cancelled is not confused about what has happened. He or she is choosing a form of words that forestalls objection, diffuses responsibility and allows the unwelcome to pass without quite being acknowledged. The passive voice, the abstract noun and the euphemism are its natural allies, since each, in its own way, removes a human agent from the scene.\n\nNone of this is new, of course. Orwell made much the same complaint about political prose some eighty years ago, and his essay is still routinely set for students who will go on to write exactly the kind of sentences it condemns. What has changed is the reach of the problem. Corporate idiom now seeps into hospitals, schools and charities, institutions whose authority depends, more than most, on being trusted to say what they mean. A patient told that their operation has been 'rescheduled to optimise capacity' is entitled to wonder what, exactly, has gone wrong.\n\nI do not wish to overstate the case. Specialist vocabulary has its place, and there are moments when tact demands a softer phrase than bare fact would supply. But tact is a courtesy extended to the listener; evasion is a protection afforded to the speaker. The test of any sentence, then, is a simple one: whom does its vagueness serve?",
      items: [
        { id: "p-c2-1", skill: "reading", type: "mcq", stem: "What is the writer's main argument about workplace jargon?", options: ["It is often a deliberate means of evading accountability", "It mostly results from careless writing", "It is irritating but essentially harmless", "It is a recent invention of large companies"], answer: 0 },
        { id: "p-c2-2", skill: "reading", type: "mcq", stem: "Why does the writer mention that Orwell's essay is still set for students?", options: ["To recommend it as a model of good style", "To highlight an irony", "To argue that teaching has improved", "To suggest Orwell's ideas are now out of date"], answer: 1 },
        { id: "p-c2-3", skill: "reading", type: "mcq", stem: "Why does the writer find the spread of corporate idiom into hospitals and schools particularly troubling?", options: ["These institutions have smaller budgets", "Their staff are less familiar with jargon", "Their standing rests heavily on being plainly honest", "They are more often criticised in the press"], answer: 2 },
        { id: "p-c2-4", skill: "reading", type: "mcq", stem: "How does the writer distinguish tact from evasion?", options: ["Tact is spoken, whereas evasion is written", "Tact is always truthful, whereas evasion never is", "Tact is a modern habit, whereas evasion is an old one", "Tact is for the listener's sake, whereas evasion is for the speaker's"], answer: 3 },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // LISTENING: 3 items per level (audio is spoken, never shown)
  // ---------------------------------------------------------------------------
  listening: [
    // A1
    { id: "l-a1-01", level: "A1", skill: "listening", type: "mcq", audio: "Hello, my name is Sam. I'm twenty-five and I live in Cardiff. I've got one sister and one brother.", stem: "Where does Sam live?", options: ["Cardiff", "London", "Cambridge", "Carlisle"], answer: 0 },
    { id: "l-a1-02", level: "A1", skill: "listening", type: "mcq", audio: "Woman: Can I have a coffee, please? Man: Large or small? Woman: Small, please. Man: That's two pounds fifty.", stem: "How much is the coffee?", options: ["£2.15", "£5.20", "£2.50", "£12.50"], answer: 2 },
    { id: "l-a1-03", level: "A1", skill: "listening", type: "mcq", audio: "The shop is open from nine o'clock to six o'clock, Monday to Saturday. On Sunday it is closed.", stem: "Which day is the shop closed?", options: ["Monday", "Saturday", "Friday", "Sunday"], answer: 3 },

    // A2
    { id: "l-a2-01", level: "A2", skill: "listening", type: "mcq", audio: "Hi Maria, it's Jen. I'm really sorry, but I can't meet you at the cinema at seven tonight. I have to work late. Can we go tomorrow instead? Call me back. Bye!", stem: "Why is Jen calling?", options: ["To change their plans", "To invite Maria for dinner", "To ask Maria for help at work", "To say she is ill"], answer: 0 },
    { id: "l-a2-02", level: "A2", skill: "listening", type: "mcq", audio: "Man: Excuse me, is there a bank near here? Woman: Yes. Go straight on and turn left at the traffic lights. The bank is next to the post office, opposite the library.", stem: "Where is the bank?", options: ["Next to the library", "Opposite the post office", "At the traffic lights", "Next to the post office"], answer: 3 },
    { id: "l-a2-03", level: "A2", skill: "listening", type: "mcq", audio: "Good morning. This is a message for parents of Year 3. Tomorrow's school trip to the zoo has moved to next Friday because of the bad weather. Children should come to school in their uniform as normal tomorrow.", stem: "What should the children wear tomorrow?", options: ["Old clothes for the trip", "A raincoat and boots", "Sports clothes", "Their usual school uniform"], answer: 3 },

    // B1
    { id: "l-b1-01", level: "B1", skill: "listening", type: "mcq", audio: "Sorry, the 8.15 to Leeds has been cancelled. Passengers should take the 8.40 from platform four.", stem: "What should passengers do?", options: ["Wait for the 8.15", "Take a later train from platform four", "Go to Leeds by bus", "Ask at platform eight"], answer: 1 },
    { id: "l-b1-02", level: "B1", skill: "listening", type: "mcq", audio: "Woman: Hello, I'd like to make an appointment with Dr Patel, please. Receptionist: I'm afraid Dr Patel is fully booked this week. I can offer you Dr Hughes on Thursday at ten past four, or you could wait until Monday for Dr Patel. Woman: Thursday's fine. I just need to get it sorted.", stem: "What does the woman decide to do?", options: ["See a different doctor on Thursday", "Wait to see Dr Patel on Monday", "See Dr Patel on Thursday", "Phone again next week"], answer: 0 },
    { id: "l-b1-03", level: "B1", skill: "listening", type: "mcq", audio: "Man: Have you finished the presentation for tomorrow? Woman: Nearly. I've done the slides, but I still need to check the figures with Tom. He was supposed to send them this morning, but I haven't heard from him. Man: I'll give him a ring for you.", stem: "What is the problem with the presentation?", options: ["The slides are not ready", "Tom has made mistakes in it", "She is still waiting for some information from a colleague", "The meeting has been moved"], answer: 2 },

    // B2
    { id: "l-b2-01", level: "B2", skill: "listening", type: "mcq", audio: "Hi, it's Mark, your landlord. Just to let you know, the plumber can't make it on Wednesday after all; something's come up. He's suggested Friday morning instead, between eight and ten. If that doesn't suit you, let me know and I'll see if he can do Saturday, though he'd rather not. Otherwise I'll assume Friday's OK.", stem: "What will happen if the tenant doesn't reply?", options: ["The plumber will come on Saturday", "The plumber will come on Wednesday as planned", "The plumber will come on Friday morning", "Mark will phone again"], answer: 2 },
    { id: "l-b2-02", level: "B2", skill: "listening", type: "mcq", audio: "Woman: How did the interview go? Man: Well, they seemed keen on my experience, but they kept asking whether I'd be willing to relocate to the Birmingham office. I said I'd think about it. Woman: And would you? Man: Honestly, with the kids settled at school here, I can't see it happening.", stem: "How does the man really feel about moving to Birmingham?", options: ["He is keen on the idea", "He doubts he will do it", "He has already agreed to it", "He has not considered it"], answer: 1 },
    { id: "l-b2-03", level: "B2", skill: "listening", type: "mcq", audio: "Good afternoon, shoppers. Due to a technical fault, the card machines on the ground floor are temporarily out of order. Customers wishing to pay by card are asked to use the tills on the first floor, where all machines are working normally. Cash payments can still be accepted on all floors. We apologise for any inconvenience.", stem: "What are customers who want to pay by card asked to do?", options: ["Pay in cash instead", "Wait until the machines are fixed", "Come back later", "Use the tills on another floor"], answer: 3 },

    // C1
    { id: "l-c1-01", level: "C1", skill: "listening", type: "mcq", audio: "Man: So, what did you make of the new head's speech? Woman: Well, it was certainly polished. Lots about 'raising aspirations' and 'a culture of excellence'. Man: But? Woman: But I've been teaching for twenty years and I've heard every one of those phrases before. I'll believe it when I see the timetables.", stem: "What is the woman's attitude to the speech?", options: ["She found it genuinely inspiring", "She felt it was poorly delivered", "She doubts it will lead to real change", "She objected to its aims"], answer: 2 },
    { id: "l-c1-02", level: "C1", skill: "listening", type: "mcq", audio: "Hi Priya, it's Daniel from HR. I'm just following up on your request for flexible hours. I've spoken to your line manager and, in principle, there's no objection, but she's raised the question of cover on Monday mornings, which is when the team meeting takes place. It might be worth having a chat with her before we put anything in writing. Give me a call when you get a chance.", stem: "What does Daniel imply about Priya's request?", options: ["It has been refused", "It is likely to be approved if one issue is resolved", "It requires her to attend every meeting", "Her manager has already signed the agreement"], answer: 1 },
    { id: "l-c1-03", level: "C1", skill: "listening", type: "mcq", audio: "Woman: Did you end up going to Jo's leaving do? Man: I did, yes. I wasn't going to, but I thought I'd show my face for half an hour. Woman: And? Man: Let's just say I was the last to leave.", stem: "What do we learn about the man?", options: ["He left after half an hour", "He decided not to go", "He regretted going", "He enjoyed it more than he had expected"], answer: 3 },

    // C2
    { id: "l-c2-01", level: "C2", skill: "listening", type: "mcq", audio: "Man: I gather the board has finally approved the restructuring. Woman: 'Approved' is a strong word. They've agreed to 'explore it further in the new financial year', which, as anyone who's sat through one of their meetings knows, is where proposals go to die quietly. Man: So you're not holding your breath. Woman: Put it this way: I wouldn't start redrawing the organisation chart just yet.", stem: "What does the woman believe about the restructuring?", options: ["It has been approved, with a short delay", "It will go ahead in the new financial year", "It is unlikely to go ahead at all", "It needs the support of more staff"], answer: 2 },
    { id: "l-c2-02", level: "C2", skill: "listening", type: "mcq", audio: "Woman: You've read Helen's report, then? Man: I have. It's... thorough. Woman: That bad? Man: Oh, the research is impeccable. It's just that by page forty you've rather lost sight of what she's actually recommending. Woman: Perhaps we could suggest an executive summary. Man: Diplomatically, yes.", stem: "What is the man's main criticism of the report?", options: ["Its main message gets lost in detail", "Its research is not rigorous", "Its recommendations are unrealistic", "It was submitted too late"], answer: 0 },
    { id: "l-c2-03", level: "C2", skill: "listening", type: "mcq", audio: "Man: I hear you've been asked to chair the residents' committee. Congratulations, I think. Woman: Thank you, I think. Man: You don't sound overjoyed. Woman: Well, it's flattering to be asked, but between the parking dispute and the row over the bins, I suspect it's less an honour than a poisoned chalice.", stem: "How does the woman feel about her new role?", options: ["Simply delighted to have been chosen", "Annoyed that nobody else volunteered", "Sure she can settle the disputes quickly", "Flattered but apprehensive about what it involves"], answer: 3 },
  ],
};
