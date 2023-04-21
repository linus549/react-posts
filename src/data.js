import avatar from "assets/images/avatar.png";

export const placeholderText =
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const FAQItems = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    eu sem integer vitae justo eget.
  `,
  },
  {
    question: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt?",
    answer: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    eu sem integer vitae justo eget. Sapien eget mi proin sed
    libero. Risus pretium quam vulputate dignissim suspendisse.
    Bibendum neque egestas congue quisque egestas diam in. Nulla
    porttitor massa id neque.
  `,
  },
  {
    question: "Ut eu sem integer vitae justo eget?",
    answer: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    eu sem integer vitae justo eget. Sapien eget mi proin sed
    libero. Risus pretium quam vulputate dignissim suspendisse.
  `,
  },
  {
    question:
      "Sapien eget mi proin sed libero, incididunt ut labore et dolore magna aliqua?",
    answer: `
    Ut eu sem integer vitae justo eget. Sapien eget mi proin sed
    libero. Risus pretium quam vulputate dignissim suspendisse.
    Bibendum neque egestas congue quisque egestas diam in. Nulla
    porttitor massa id neque.
  `,
  },
  {
    question: "Tempor incididunt ut labore et?",
    answer: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  `,
  },
];

export const users = {
  results: [
    {
      name: { first: "John", last: "Smith" },
      picture: { large: avatar },
    },
    {
      name: { first: "Rachel", last: "Pearson" },
      picture: { large: avatar },
    },
    {
      name: { first: "Walter", last: "Reyes" },
      picture: { large: avatar },
    },
    {
      name: { first: "Kai", last: "Hernes" },
      picture: { large: avatar },
    },
    {
      name: { first: "Alma", last: "Poulsen" },
      picture: { large: avatar },
    },
    {
      name: { first: "Oliver", last: "Lo" },
      picture: { large: avatar },
    },
  ],
};

export const posts = {
  hits: [
    {
      created_at: "2020-12-07T15:56:03.000Z",
      title: "A Modern JavaScript Tutorial",
      url: "https://javascript.info/",
      author: "ivanche",
      points: 893,
      num_comments: 292,
      objectID: "25333350",
      children: [
        {
          id: 25343745,
          created_at: "2020-12-08T10:43:04.000Z",
          author: "qwerty456127",
          text: "<p>So glad people still make things like this despite so many tutorials and books already being available. This means people still care to make something purely for sake of making it better - obviously nobody would be interested if it wasn&#x27;t. Crafting tutorials should be considered an art.</p>",
          children: [],
        },
        {
          id: 25338627,
          created_at: "2020-12-07T22:33:33.000Z",
          author: "ZoomZoomZoom",
          text: "<p>Suppose I&#x27;ve been living under a rock this whole time and my knowledge of JS is something along `it&#x27;s a language you use when you want a message box to appear and annoy your visitors`, i.e. completely out of touch.</p><p>How could you explain me, strictly from the language design point, not practicality&#x2F;how widespread it is&#x2F;how easy is to find a job&#x2F;etc, why JS? What are the strong points which make it a better language than lua&#x2F;python&#x2F;lisp&#x2F;tcl&#x2F;ruby? Thanks.</p>",
          children: [
            {
              id: 25338749,
              created_at: "2020-12-07T22:45:49.000Z",
              author: "OkGoDoIt",
              text: "<p>Well for client side code running on a website, it’s your only option. I guess nowadays many client support web assembly, but for all practical purposes you need to use JavaScript to do any client side web programming.</p><p>On the server the advantage is much less clear-cut, but a lot of it boils down to “we want to use the same language for the front end and the backend“. Although in my experience this is actually a horrible idea, and tends to result in very messy code and lots of work arounds in practice.</p><p>Anyway for me personally I continue to use JavaScript because of a combination of wanting to build lightly-interactive webpages and because that really is what the job market demands. So many companies are dead-set on hiring someone with node, react, and whatever other JavaScript experience. I tried taking it off my resume at one point because I kind of hate it, but if you’re at all involved in full stack web development it’ll really hurt your career if you don’t do JavaScript.</p>",
              children: [],
            },
          ],
        },
        {
          id: 25334035,
          created_at: "2020-12-07T17:02:55.000Z",
          author: "viviansolide",
          text: "<p>Thanks for sharing.\nI found this quote very appropriated:</p><p>In older scripts, you may also find another keyword: var instead of let</p>",
          children: [
            {
              id: 25335977,
              created_at: "2020-12-07T19:20:33.000Z",
              author: "Rumudiez",
              text: "<p>True for reading legacy JS. For newer code, you can still identify noobies (and &quot;experts&quot;) by the conspicuous usage of let instead of const.</p>",
              children: [
                {
                  id: 25339608,
                  created_at: "2020-12-08T00:09:47.000Z",
                  author: "reificator",
                  text: "<p>While I certainly prefer immutability there are many who do not, and that preference does not make you better or more experienced than them.</p>",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 25337123,
          created_at: "2020-12-07T20:37:38.000Z",
          author: "msie",
          text: '<p>Remember when some people advocated not using semicolons to end statements? Good times...</p><p><a href="https:&#x2F;&#x2F;javascript.info&#x2F;structure" rel="nofollow">https:&#x2F;&#x2F;javascript.info&#x2F;structure</a></p>',
          children: [
            {
              id: 25341185,
              created_at: "2020-12-08T03:02:09.000Z",
              author: "sneak",
              text: "<p>I don&#x27;t know whether I use them or not, to be honest (and I just finished a project in js).  My code looks like whatever the almost-default (tab-width: 4) output of prettier is.</p><p>It&#x27;s nice to not waste a single braincycle on these things anymore.</p>",
              children: [
                {
                  id: 25343926,
                  created_at: "2020-12-08T11:17:09.000Z",
                  author: "Jowsey",
                  text: "<p>This. I just use an auto-formatter for the Standard style. If the Standard linter says it looks ok, it looks ok to me, and I move on with my day.</p>",
                  children: [],
                },
              ],
            },
            {
              id: 25337392,
              created_at: "2020-12-07T20:56:16.000Z",
              author: "pknopf",
              text: "<p>Yeah...</p><p>There was a big push for that a while back. The JavaScript community can be silly.</p>",
              children: [],
            },
            {
              id: 25341764,
              created_at: "2020-12-08T04:23:26.000Z",
              author: "austincheney",
              text: "<p>So what changed this? This was a hill that people were willing to die on.</p>",
              children: [],
            },
            {
              id: 25341011,
              created_at: "2020-12-08T02:41:33.000Z",
              author: "simplify",
              text: "<p>I still don&#x27;t use them :)</p>",
              children: [],
            },
            {
              id: 25337698,
              created_at: "2020-12-07T21:19:18.000Z",
              author: "weeksie",
              text: "<p>I&#x27;ve run into that in a few places and it always baffles me that people would intentionally choose to add even <i>more</i> gotchas to <i>javascript</i>. Don&#x27;t get me wrong, I think aesthetics in code are important but not to the point of deliberately increasing the chance of hard to find bugs.</p>",
              children: [],
            },
            {
              id: 25339238,
              created_at: "2020-12-07T23:31:24.000Z",
              author: "gtsop",
              text: "<p>I used to be on the &quot;always use semicolons&quot; side of this argument. Having shipped multiple projects using both methods my verdict is clear: It doesn&#x27;t matter. Why it doesn&#x27;t matter you ask? Because 1) I am enforcing either decision with eslint rules and 2) i write unit tests 3) code is transpiled (thus semicolons are handled perfectly at the output). Having these three in place, I have yet to encounter a single &quot;gotcha&quot; out of omitting semicolons.</p><p>If for any reason you absolutelly can&#x27;t have these in place, better be safe and use semicolons.</p><p>Edit: for the &quot;gotcha&quot; explained in the link, prettier will automatically insert a semicolon before the array.</p>",
              children: [
                {
                  id: 25344045,
                  created_at: "2020-12-08T11:38:29.000Z",
                  author: "madeofpalk",
                  text: "<p>&quot;It doesn&#x27;t matter&quot; really is the perfect summation of this.</p><p>We have tooling that can solve this to prevent pointless bike shedding.</p>",
                  children: [],
                },
                {
                  id: 25344639,
                  created_at: "2020-12-08T13:17:20.000Z",
                  author: "JoBrad",
                  text: "<p>Exactly. I almost always use TS instead of JS, for example, which flags gotcha scenarios (which I usually rewrite to avoid) and inserts semicolons for me in the final code. It’s just noise in my source.</p>",
                  children: [],
                },
                {
                  id: 25342406,
                  created_at: "2020-12-08T06:07:40.000Z",
                  author: "ux-app",
                  text: "<p>&gt;I have yet to encounter a single &quot;gotcha&quot; out of omitting semicolons.</p><p>keyword &quot;yet&quot;. It seems like such a insignificant win, with the downside being some very hard to debug runtime error because one element of your build chain has a bug or misses an edge case.</p><p>I honestly don&#x27;t see the logic.</p>",
                  children: [
                    {
                      id: 25342650,
                      created_at: "2020-12-08T06:56:35.000Z",
                      author: "oweiler",
                      text: "<p>It just makes the code slightly easier to read. The semicolon is just noise.</p>",
                      children: [
                        {
                          id: 25345160,
                          created_at: "2020-12-08T14:02:43.000Z",
                          author: "dotancohen",
                          text: "<p>I disagree that the semicolon is noise Thought the Javascript interpretter (usually) does not need it the semicolon is good for humans who read the code after you Sure it is possible to read the code without the semicolons with some practice but the semicolons are standard in many other related languages among them Java C++ PHP and MySQL Now you personally might not use those other languages very often but many of us especially those who occasionally wear a devops hat do And if the code is not meant to be read by humans also then why are we not writing in assembly</p>",
                          children: [],
                        },
                        {
                          id: 25342893,
                          created_at: "2020-12-08T07:40:59.000Z",
                          author: "burlesonK",
                          text: "<p>Semicolons aren&#x27;t noise; you&#x27;ve read the statement before you even get to them so how can they be noise?  Noise would be type info added to languages that didn&#x27;t have it before, such as TypeScript.  Generics can get pretty gnarley too, when you have nested typing info involved.</p>",
                          children: [
                            {
                              id: 25345395,
                              created_at: "2020-12-08T14:18:09.000Z",
                              author: "goatlover",
                              text: "<p>Noise as in new line already terminates. That’s one reason Python and Ruby code are cleaner to read.</p>",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 25351384,
                      created_at: "2020-12-08T21:09:47.000Z",
                      author: "gtsop",
                      text: "<p>I explained the logic: By having tooling and tests it place, I am protected against gotchas and I haven&#x27;t ever encountered a problem. Thus, i do not advocate you <i>must</i> ommit semicolons. I am saying &quot;it doesn&#x27;t matter what you do&quot; provided you have the tooling in place. Do whatever feels best, what you like, what you feel comfortable with.</p><p>And here is the upside: I&#x27;ve minimized the time I spend arguing about this detail with my colleagues to 0s. Because it doesn&#x27;t matter :)</p>",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: 25337501,
              created_at: "2020-12-07T21:04:57.000Z",
              author: "stingraycharles",
              text: '<p><a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=2024328" rel="nofollow">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;item?id=2024328</a></p><p>Here’s an example great bike shed discussion from ~10y ago about whether or not to use semicolons with JavaScript.</p><p>“If you don’t understand how statements in JavaScript are terminated, then you just don’t know JavaScript very well, and shouldn’t write JavaScript programs professionally without supervision, and you definitely should not tell anyone else how to write their JavaScript programs.”</p><p>Those were the fun days! :)</p>',
              children: [
                {
                  id: 25343017,
                  created_at: "2020-12-08T08:01:18.000Z",
                  author: "wwweston",
                  text: "<p>Something I always thought was interesting about that argument is how a similar line of reasoning could apply to the `==` and `===` comparison operators.</p><p>Just about anyone who&#x27;s ever written JS probably knows about the <i>heavy</i> lean towards &quot;always use `===`&quot;. And it&#x27;s not without good reason, because there are more than handful of not-entirely-intuitive implicit coercions&#x2F;comparison corners associated with `==`. Personally, I think it&#x27;s OK to use it, but I understand that it requires knowing the rules associated with use and most of all <i>comes with the overhead of keeping them in mind when you do so</i>. Most of the time it will be OK if you know even most of the rules. Sometimes it will not be OK. More often the overhead will cost you attention to other things. Some people have made the call &quot;wouldn&#x27;t it be simpler if we just did strict comparison and saved our attention for other things?&quot; and while it&#x27;s not my first choice, I can understand and respect it.</p><p>The statement termination thing strikes me as pretty much the same. Sure, if you know the rules, you can do it freely. But it takes something explicit that you <i>don&#x27;t</i> have to think about and turns it into something implicit that you do. It isn&#x27;t going to be a problem most of the time, but sometimes it will not be OK. A little more often the overhead will cost you attention to other things. Following the rule that semicolons terminate statements hasn&#x27;t ever cost me anything.</p><p>The weird thing in my experience was the frequent overlap between antisemicolonists and always===ists. My theory is that mostly these people came from Ruby and Python, liked less punctuation for subjective aesthetic reasons, and didn&#x27;t actually know the coercion rules well or particularly like JS, but that&#x27;s speculation.</p>",
                  children: [
                    {
                      id: 25343531,
                      created_at: "2020-12-08T09:49:25.000Z",
                      author: "randomsearch",
                      text: "<p>“Explicit is better than implicit.”</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 25343968,
                  created_at: "2020-12-08T11:25:00.000Z",
                  author: "dagw",
                  text: "<p>Reminds me of a CS teacher for our intro Haskell course at university who would dock points for unnecessary use of parentheses, since he considered that it showed we didn&#x27;t understand order of operations or how our program was parsed.</p>",
                  children: [
                    {
                      id: 25344386,
                      created_at: "2020-12-08T12:40:35.000Z",
                      author: "heja2009",
                      text: '<p>The programming language Occam, in its time the primary language to program Transputers, did not have operator precedence, so you had to use parentheses for anything.\nIt was a huge pain, but probably still better than avoiding the edge cases of what you describe...</p><p><a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Occam_(programming_language)" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Occam_(programming_language)</a></p>',
                      children: [],
                    },
                    {
                      id: 25344142,
                      created_at: "2020-12-08T11:57:07.000Z",
                      author: "Timpy",
                      text: "<p>That sounds like a bad professor.  It doesn&#x27;t cost anything to add parenthesis for clarity.  I enjoy well written code but we&#x27;re not writing literature here, it&#x27;s okay to be explicit.</p>",
                      children: [
                        {
                          id: 25344251,
                          created_at: "2020-12-08T12:19:34.000Z",
                          author: "dagw",
                          text: "<p>Yea it was very weird. I think most people realized that his way wasn&#x27;t the right way.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 25354980,
              created_at: "2020-12-09T03:25:43.000Z",
              author: "flippinburgers",
              text: "<p>Debate over one character whose presence in code has no downside other than that a subset of programmers get to feel less arrogant.  Sometimes I cannot stand this industry.</p>",
              children: [],
            },
          ],
        },
        {
          id: 25334565,
          created_at: "2020-12-07T17:40:41.000Z",
          author: "boberoni",
          text: "<p>&gt; According to your browser language headers, you know Chinese. Please help to translate the tutorial into your language! Thank you!</p><p>I&#x27;m curious. How are my language preferences exposed through HTTP headers?</p><p>I think this was a charming way to request volunteers for translation, but I was a bit taken aback.</p>",
          children: [
            {
              id: 25334583,
              created_at: "2020-12-07T17:41:31.000Z",
              author: "lights0123",
              text: '<p><a href="https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;HTTP&#x2F;Headers&#x2F;Accept-Language" rel="nofollow">https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;HTTP&#x2F;Headers&#x2F;Ac...</a></p>',
              children: [],
            },
            {
              id: 25335096,
              created_at: "2020-12-07T18:16:12.000Z",
              author: "smarx007",
              text: "<p>I have figured it out experimentally (Chrome &amp; Ukrainian): if you visit a website in language X and click Never Translate, Chrome silently adds language X to the end of the list (Accept-Language that is). I have not found a way to forcibly turn it off.</p><p>Edit: check out chrome:&#x2F;&#x2F;translate-internals&#x2F; if you are interested</p>",
              children: [],
            },
            {
              id: 25334598,
              created_at: "2020-12-07T17:42:34.000Z",
              author: "jmt_",
              text: "<p>The Accept-Language HTTP request header is my guess</p>",
              children: [],
            },
            {
              id: 25334967,
              created_at: "2020-12-07T18:07:49.000Z",
              author: "croisillon",
              text: '<p>I get the same question (after a while) here: <a href="https:&#x2F;&#x2F;www.wpf-tutorial.com&#x2F;" rel="nofollow">https:&#x2F;&#x2F;www.wpf-tutorial.com&#x2F;</a></p>',
              children: [],
            },
            {
              id: 25337017,
              created_at: "2020-12-07T20:30:47.000Z",
              author: "sequoia",
              text: "<p>This was probably set at the operating system level, i.e. you selected &quot;zh_ZH&quot;&#x2F;Chinese at some point during setup. Upon installing a browser, it reads your OS language preference &amp; then passes that through to websites via the accept-language header.</p>",
              children: [],
            },
            {
              id: 25334770,
              created_at: "2020-12-07T17:54:00.000Z",
              author: "pwdisswordfish4",
              text: "<p>Is your next thought after having your curiosity piqued not, &quot;I should look at what headers my browser is sending&quot;, or &quot;I should type &#x27;browser language headers&#x27; into a search engine&quot;?  I&#x27;m trying to understand what sort of things lead people instead to think, &quot;I should type a question about &#x27;browser language headers&#x27; into a comment box on an off-topic thread, wait for a response, and then go back and check what the replies say.&quot;</p>",
              children: [
                {
                  id: 25335040,
                  created_at: "2020-12-07T18:12:48.000Z",
                  author: "dhruvarora013",
                  text: "<p>I think this is a little harsh. The comment does point out a feature on the topic site. I&#x27;m personally glad that they brought it up because as an English speaker I didn&#x27;t see this  feature exposed. Internationalisation is a complex yet required feature for large websites these days, and a clever feature like this to find translations is great!</p>",
                  children: [
                    {
                      id: 25335880,
                      created_at: "2020-12-07T19:12:39.000Z",
                      author: "pwdisswordfish4",
                      text: "<p>&gt; I think this is a little harsh</p><p>Only if you read the question and assume that it is something besides a question.  How does a person ask the question that I asked and mark it unambiguously as a question, not a statement (and do it without unnecessary baggage)?  How do I convince people to answer the question instead of reply the way you did, to something you received instead of what I asked?  Is that question not tolerable (it got flagged) but the other commenter&#x27;s is fine?</p>",
                      children: [
                        {
                          id: 25337889,
                          created_at: "2020-12-07T21:35:13.000Z",
                          author: "resu_nimda",
                          text: "<p>It comes off as condescending. Generally, being incredulous of the way someone thinks isn&#x27;t a respectful way to engage with them (I&#x27;m sure most of us are guilty of it at times, but usually in frustration with people that we have a personal relationship with). If you&#x27;re going to ask someone something that might offend them, I would suggest starting with a show of goodwill. Also, extensive use of hypothetical &quot;thought-quotes&quot; is very easily construed as mocking or belittling, even if you were just trying to be precise about your meaning.</p><p>A better way to ask might have been: &quot;I&#x27;m curious, and I don&#x27;t mean to be rude, but what caused you to post this comment here instead of searching for the answer?&quot;</p>",
                          children: [
                            {
                              id: 25340222,
                              created_at: "2020-12-08T01:08:00.000Z",
                              author: "pwdisswordfish4",
                              text: "<p>That recommendation strikes me as much closer to an attempt to make a statement with a rhetorical question than the question I actually asked.  Even the most charitable assumption of good faith would most likely yield a response lacking detail and devoid of any insights that I was after.</p>",
                              children: [
                                {
                                  id: 25340911,
                                  created_at: "2020-12-08T02:27:26.000Z",
                                  author: "resu_nimda",
                                  text: "<p>You could add that &quot;I&#x27;m asking because the process of typing an off-topic comment on a forum and waiting for replies strikes me as an inefficient way to get an answer to this question, and I&#x27;m genuinely trying to understand that thought process.&quot;</p><p>I highly doubt it would have performed worse than your strategy, which at best resulted in a derail about tone, and at worst scared off the person you were asking and others who may have otherwise taken time to give the deep and thoughtful answer you were looking for.</p><p>It seems clear that you find niceties and pleasantries to be not genuine or unnecessary, and I can sympathize, but they go a long way in terms of making people feel comfortable and opening up to you.</p>",
                                  children: [
                                    {
                                      id: 25341375,
                                      created_at: "2020-12-08T03:26:15.000Z",
                                      author: "pwdisswordfish4",
                                      text: "<p>&gt; It seems clear that you find niceties and pleasantries to be not genuine or unnecessary</p><p>Wrong.  It seems clear you all like making assumptions and treating them as unshakeable truth.</p><p>I scarcely think that your suggested wording (your second attempt, keep in mind) would have satisfied even you without this conversational backdrop providing context.</p><p>&gt; I highly doubt it would have performed worse than your strategy,</p><p>Those aren&#x27;t the goalposts we&#x27;re shooting for.  You&#x27;ve subtly given yourself an easier target to hit than the one that was presented.</p>",
                                      children: [
                                        {
                                          id: 25342512,
                                          created_at:
                                            "2020-12-08T06:30:48.000Z",
                                          author: "resu_nimda",
                                          text: "<p>&gt; Wrong. It seems clear you all like making assumptions and treating them as unshakeable truth.</p><p>Can you explain, then, why 1) your original post was devoid of any such language, and 2) you dismissed my suggestion, which added some, as being likely to cynically have the opposite effect of what was intended?</p><p>I get what you&#x27;re saying. People often do couch cynicism and trolling in pleasantries. Which makes it difficult to appear genuine when asking a tough question like that. But that means you have to try extra hard if you want results, not give up entirely and go full autism on someone that clearly isn&#x27;t going to respond well to that.</p>",
                                          children: [
                                            {
                                              id: 25348340,
                                              created_at:
                                                "2020-12-08T17:23:11.000Z",
                                              author: "pwdisswordfish4",
                                              text: "<p>There&#x27;s a perverse irony in the way your responses here exude condescension while ostensibly trying educate and inform about the sort of things that people respond to.  Although it looks like you came here to argue (which now explains the presumptuousness), I didn&#x27;t, and I&#x27;m not wasting any (more) of my time indulging you.</p><p>&gt; I get what you&#x27;re saying. People often do couch cynicism and trolling in pleasantries.</p><p>No, apparently you don&#x27;t, because that&#x27;s not at all what I said or what I&#x27;m trying to say.  Aside from failing at that, you almost succeeded at deflecting, but not quite.  The attempt to change the subject and avoid responding directly is yet more reason to stop this here.</p>",
                                              children: [
                                                {
                                                  id: 25352935,
                                                  created_at:
                                                    "2020-12-08T23:19:25.000Z",
                                                  author: "resu_nimda",
                                                  text: "<p>&gt; There&#x27;s a perverse irony in the way your responses here exude condescension while ostensibly trying educate and inform about the sort of things that people respond to.</p><p>That&#x27;s a fair point, and later last night I regretted having used some unhelpful rhetoric. I often struggle to resist that temptation. In my defense though I was only going toe to toe with someone who had already demonstrated a willingness to dispense with courtesy in the name of pure inquiry.</p>",
                                                  children: [
                                                    {
                                                      id: 25354490,
                                                      created_at:
                                                        "2020-12-09T02:05:27.000Z",
                                                      author: "pwdisswordfish4",
                                                      text: "<p>Shoehorning big words into a message usually has the opposite of the intended effect.  This instance is not the exception.</p>",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 25337661,
                          created_at: "2020-12-07T21:16:22.000Z",
                          author: "scpedicini",
                          text: "<p>Because your question reads as a relatively transparent thinly veiled insult, like you&#x27;re questioning his ability to be curious about the world, and contributes very little to the discussion.</p>",
                          children: [
                            {
                              id: 25340162,
                              created_at: "2020-12-08T01:02:10.000Z",
                              author: "pwdisswordfish4",
                              text: "<p>You haven&#x27;t given me anything actionable.  Read the question I asked, understand against your instincts that it is a question and not the insult you assumed it to be, and then tell me a way to ask that question that doesn&#x27;t make you feel the way you do right now.  Is there one?</p><p>Disagree strongly on &quot;contributes very little to the discussion&quot;.</p>",
                              children: [],
                            },
                          ],
                        },
                        {
                          id: 25341097,
                          created_at: "2020-12-08T02:52:50.000Z",
                          author: "smarx007",
                          text: "<p>Yes, I think you should assume something else.</p><p>I provided a reply above from my point of view: I use a computer that has English as a primary language, my Chrome install is also English and I don&#x27;t live in Ukraine. And of course, I have never added Ukrainian language in my Chrome settings. And yet it &quot;guessed&quot; that I speak Ukrainian. The key bit here is that browsers may modify the list of languages even after you go to the settings and remove all languages except for English (for the record, Chrome also &quot;forgets&quot; that I told it never to translate Ukrainian after I remove Ukrainian from the Accept-Language settings, which is annoying).</p><p>So, I guess you are a native English speaker and simply never had any exposure to this &quot;customer journey&quot;. I hope my explanation gives you a glimpse into why an experienced software engineer may be still surprised to see a website detect a language they are not using in the system.</p>",
                          children: [
                            {
                              id: 25341418,
                              created_at: "2020-12-08T03:32:20.000Z",
                              author: "pwdisswordfish4",
                              text: "<p>I think you replied to the wrong thread.</p>",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 25334827,
                  created_at: "2020-12-07T17:58:12.000Z",
                  author: "djeiasbsbo",
                  text: "<p>Maybe he did fo that but wanted to inform the OP that this was surprising to him. Given that the OP is looking for translators it is valuable feedback imo.</p>",
                  children: [],
                },
                {
                  id: 25337419,
                  created_at: "2020-12-07T20:58:25.000Z",
                  author: "heavyset_go",
                  text: "<p>I&#x27;ve done this more than a few times because this is a good community to get direct answers from when it comes to questions like the OP&#x27;s.</p>",
                  children: [
                    {
                      id: 25340247,
                      created_at: "2020-12-08T01:10:20.000Z",
                      author: "pwdisswordfish4",
                      text: "<p>I don&#x27;t understand.</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 25334940,
                  created_at: "2020-12-07T18:06:22.000Z",
                  author: "bryanrasmussen",
                  text: "<p>maybe: since I&#x27;m already here I&#x27;ll ask the question because on this particular site somebody knows the answer and can probably give me a better starting point for learning about the subject than the average search engine!</p><p>Also it will serve as a notice to people that not everybody knows these things and might be put out by this sort of question.</p>",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 25343792,
          created_at: "2020-12-08T10:51:17.000Z",
          author: "pachico",
          text: "<p>I feel I need this so badly.\nThe last time I wrote something in JavaScript was around 10 years ago and I want to get up to date. \nOne of the chapters is named &quot;the old &#x27;var&#x27;&quot;. I didn&#x27;t know it was old, which proves the need to learn.</p>",
          children: [],
        },
        {
          id: 25335351,
          created_at: "2020-12-07T18:32:39.000Z",
          author: "OpuRahman",
          text: "<p>Needs to be updated on a regular basis.</p>",
          children: [
            {
              id: 25336384,
              created_at: "2020-12-07T19:50:59.000Z",
              author: "stasgavrylov",
              text: "<p>It&#x27;s open source and they&#x27;re actively looking for contributors.</p>",
              children: [],
            },
          ],
        },
        {
          id: 25350199,
          created_at: "2020-12-08T19:33:30.000Z",
          author: "ngcc_hk",
          text: "<p>Like the email based one more.  But this seems more complete.</p>",
          children: [],
        },
        {
          id: 25339449,
          created_at: "2020-12-07T23:53:16.000Z",
          author: "dfilppi",
          text: "<p>The Ninja section is priceless.</p>",
          children: [],
        },
        {
          id: 25342271,
          created_at: "2020-12-08T05:36:23.000Z",
          author: "ianstormtaylor",
          text: "<p>Wow, this is really well put together! Anyone know an equally good guide for Python?</p>",
          children: [],
        },
        {
          id: 25334081,
          created_at: "2020-12-07T17:06:06.000Z",
          author: "jsnk",
          text: "<p>Excellent resources. Is there one like this for Java?</p>",
          children: [],
        },
        {
          id: 25337153,
          created_at: "2020-12-07T20:39:08.000Z",
          author: "forgotmypw17",
          text: "<p>I prefer post-modern javascript, the kind that works universally across all browsers starting with Netscape 2.0</p>",
          children: [
            {
              id: 25337641,
              created_at: "2020-12-07T21:14:59.000Z",
              author: "markdown",
              text: "<p>alert(&quot;Reached here #23&quot;);</p>",
              children: [
                {
                  id: 25340871,
                  created_at: "2020-12-08T02:22:32.000Z",
                  author: "forgotmypw17",
                  text: "<p>More like:</p><p>&#x2F;&#x2F;alert(&#x27;DEBUG: SomeFunction: condition is TRUE&#x27;);</p><p>Then, depending on what browser I&#x27;m debugging in, the post-processor changes that to either console.log, document.title=, or alert(</p><p>:)</p>",
                  children: [],
                },
              ],
            },
            {
              id: 25341812,
              created_at: "2020-12-08T04:30:41.000Z",
              author: "austincheney",
              text: "<p>Aside from newer methods the only syntax gotchas in my code are template strings and let&#x2F;const. That makes the code really quick and simple to convert to an old IE friendly application.</p>",
              children: [],
            },
          ],
        },
        {
          id: 25335109,
          created_at: "2020-12-07T18:17:06.000Z",
          author: "kaycebasques",
          text: '<p>This is not a tutorial [1]. It&#x27;s more like a guide [2].</p><p>[1]: <a href="https:&#x2F;&#x2F;documentation.divio.com&#x2F;tutorials&#x2F;" rel="nofollow">https:&#x2F;&#x2F;documentation.divio.com&#x2F;tutorials&#x2F;</a></p><p>[2]: <a href="https:&#x2F;&#x2F;documentation.divio.com&#x2F;how-to-guides&#x2F;" rel="nofollow">https:&#x2F;&#x2F;documentation.divio.com&#x2F;how-to-guides&#x2F;</a></p><p>Edit: I don&#x27;t mention this to be nitpicky. I mention it because I wish that we would collectively start standardizing those terms. I think it would be helpful if, whenever we saw &quot;… guide&quot; or &quot;… tutorial&quot; we had a general idea about the structure and purpose of the contents. The Divio links above do a great job at explaining each doc type. I&#x27;m simply sharing this idea for people who have never considered being more careful about how they label their docs and would like to start following general technical writing community practices.  As a practicing technical writer I can tell you that the TW community mostly agrees upon what each doc type entails (&quot;tutorials&quot; and &quot;references&quot; have strong consensus; &quot;guides&quot; less so).</p>',
          children: [
            {
              id: 25339397,
              created_at: "2020-12-07T23:47:15.000Z",
              author: "dboreham",
              text: "<p>&#x27;And thirdly, the code is more what you&#x27;d call &quot;guidelines&quot; than actual rules.&#x27;</p>",
              children: [],
            },
            {
              id: 25340491,
              created_at: "2020-12-08T01:35:09.000Z",
              author: "useragent86",
              text: "<p>I looked at those links.  Here&#x27;s what I got from them:</p><p>1.  Tutorials &quot;are lessons that take the reader by the hand through a series of steps.&quot; They &quot;are oriented towards learning how.&quot;</p><p>2.  How-to guides &quot;take the reader through steps.&quot;</p><p>3.  &quot;How-to guides are wholly distinct from tutorials.&quot;</p><p>If I found a &quot;community&quot; around a topic, do I then get to decide what words mean?  By consensus, of course.</p>",
              children: [
                {
                  id: 25341574,
                  created_at: "2020-12-08T03:55:53.000Z",
                  author: "xixixao",
                  text: '<p>You can see a good breakdown of what they mean by each label in this table:</p><p><a href="https:&#x2F;&#x2F;documentation.divio.com&#x2F;introduction&#x2F;#the-secret" rel="nofollow">https:&#x2F;&#x2F;documentation.divio.com&#x2F;introduction&#x2F;#the-secret</a></p><p>It&#x27;s certainly a valuable take, even if you disagree with the claim that all 4 functions are required for good documentation.</p>',
                  children: [
                    {
                      id: 25343907,
                      created_at: "2020-12-08T11:14:20.000Z",
                      author: "quietbritishjim",
                      text: "<p>What specifically are you referring to in that table? The original article is a lesson on how to use JavaScript, from scratch, for a beginner. That perfectly fulfills all four requirements in the &quot;tutorial&quot; column:</p><p>&gt; oriented to: learning</p><p>&gt; must: allow the newcomer to get started</p><p>&gt; its form: a lesson</p><p>&gt; analogy: teaching a small child how to cook</p><p>It does not satify all the requirements of any other column.</p>",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: 25343866,
              created_at: "2020-12-08T11:06:40.000Z",
              author: "quietbritishjim",
              text: "<p>This <i>is</i> a tutorial. It almost fits the definition of &quot;tutorial&quot; at the link you posted, but not quite, but that&#x27;s because the definition at the link you posted is a bit flawed. It definitely is not a how-to guide, and the links you posted strongly support that.</p><p>&gt; How-to guides take the reader through the steps required to solve a real-world problem.</p><p>That is from the linked article on how-to guide. By &quot;real-world problem&quot; it means something specific you might want to do to a real code base, like &quot;switch to a different database engine&quot; or &quot;add user authenticaion&quot;. That&#x27;s why it includes the qualification &quot;real-world&quot;. The original article definitely does not fall into that category.</p><p>&gt; * A tutorial is what you decide a beginner needs to know.</p><p>&gt; * A how-to guide is an answer to a question that only a user with some experience could even formulate.</p><p>That was some extra clarification from the linked article on the difference between tutorial and how-to guide. That makes it even more clear that the article is more like a tutorial than a how-to guide.</p><p>&gt; Tutorials are lessons that take the reader by the hand through a series of steps to complete a project of some kind.</p><p>That&#x27;s from the page about tutorials. The article introduces a reader to a substantial new topic from scratch and guides them through it, but it doesn&#x27;t do so by making them complete a specific project, so it doesn&#x27;t fit this definition.</p><p>But that doesn&#x27;t stop it from being a &quot;tutorial&quot;. The requirement that tutorials have to involve completing a sample project is invented by the author of that page and not part of the usual definition of that word.</p><p>This final point is pure conjecture, but I suspect the author of that page was just trying to strongly encourage people to base tutorials around sample projects. It&#x27;s fair to encourage that, because often tutorials are improved by basing them around a single unifying project (but not always). But putting it in their definition of the word was a mistake, because that&#x27;s not what that word means, and it&#x27;s only created confusion.</p>",
              children: [],
            },
            {
              id: 25386409,
              created_at: "2020-12-11T14:52:16.000Z",
              author: "ethanfinni",
              text: "<p>Do you have a good JS <i>tutorial</i> for beginners that meets the definitions you are proposing to compare and contrast?</p>",
              children: [],
            },
          ],
        },
        {
          id: 25345863,
          created_at: "2020-12-08T14:50:57.000Z",
          author: "bovermyer",
          text: "<p>This is great. However, it gives the example of copying a variable by assigning another variable to it. This doesn&#x27;t copy a variable&#x27;s contents - it makes the new variable a pointer to the original variable.</p><p>As someone who doesn&#x27;t use Javascript much... is there a way to force it to copy the current state of the original variable to the new variable, without it being a reference and without having to use something like lodash?</p>",
          children: [
            {
              id: 25346113,
              created_at: "2020-12-08T15:07:37.000Z",
              author: "rhengles",
              text: "<p>I think the only reasonable thing that js can do here is what it does - copy the reference. Also, there is a simple way to copy all properties from a object: const copy = { ...object }; Of course, if these properties are themselves objects, then changes in one of them will appear in the other.</p><p>One way to have a deep copy which shares nothing is const copy = JSON.parse(JSON.stringify(object)); but that may not always work. In short, copying a arbitrarily large object will probably waste memory, so it should be a little hard so you don&#x27;t do it unless it&#x27;s really necessary.</p>",
              children: [],
            },
            {
              id: 25346167,
              created_at: "2020-12-08T15:11:54.000Z",
              author: "ianjsikes",
              text: "<p>The cheaty way is `let copy = JSON.parse(JSON.stringify(val))`. Doesn&#x27;t work for functions or cyclic structures though.</p>",
              children: [],
            },
            {
              id: 25345925,
              created_at: "2020-12-08T14:55:07.000Z",
              author: "lighthazard",
              text: "<p>You will need to clone the object somehow. The simplest solution is to go through each of the object properties and create a new object with those same properties (_.clone). Alternatively, recursively go through each property in the object and then keep going deeper through each property that is an object until you get a copy of everything to assign to a new object (_.deepClone)</p>",
              children: [],
            },
            {
              id: 25346288,
              created_at: "2020-12-08T15:20:03.000Z",
              author: "derivagral",
              text: '<p>In addition to the cloning stuff, I&#x27;ve seen use of an immutables library [0] to make this stuff a little more explicit and simple. Not sure if that&#x27;s still fashionable though.</p><p>[0] e.g. <a href="https:&#x2F;&#x2F;immutable-js.github.io&#x2F;immutable-js&#x2F;" rel="nofollow">https:&#x2F;&#x2F;immutable-js.github.io&#x2F;immutable-js&#x2F;</a></p>',
              children: [],
            },
          ],
        },
        {
          id: 25335116,
          created_at: "2020-12-07T18:17:18.000Z",
          author: "simonw",
          text: '<p>I&#x27;m surprised I haven&#x27;t seen this before - it&#x27;s been under very active development since 2015 and has 11,000+ stars on GitHub: <a href="https:&#x2F;&#x2F;github.com&#x2F;javascript-tutorial&#x2F;en.javascript.info&#x2F;graphs&#x2F;contributors" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;javascript-tutorial&#x2F;en.javascript.info&#x2F;gr...</a></p>',
          children: [
            {
              id: 25336185,
              created_at: "2020-12-07T19:37:07.000Z",
              author: "mekoka",
              text: '<p>Even more surprising, it&#x27;s been submitted umpteen times before:</p><p><a href="https:&#x2F;&#x2F;news.ycombinator.com&#x2F;from?site=javascript.info" rel="nofollow">https:&#x2F;&#x2F;news.ycombinator.com&#x2F;from?site=javascript.info</a></p><p>I sometimes wonder what are the dynamics that trigger the snowball on HN.</p>',
              children: [
                {
                  id: 25337863,
                  created_at: "2020-12-07T21:32:59.000Z",
                  author: "codetrotter",
                  text: "<p>I think time of day, novelty, luck, and whether any mods notice the post and decide to give it a second wind.</p><p>By novelty I mean something that is easily recognized as new and important. It doesn’t help that something is new if no one catches the point of reading about it. Could be a bad title or a bad article. Or bad luck.</p><p>In terms of good luck I mean a couple of specific things especially:</p><p>- If a few people see it that are excited about it, either from hearing about it the first time or from knowing it in the past, and these people write positive comments about it, then others who come across the post may be encouraged to check it out and to upvote it too.</p><p>- “Micro zeitgeist”. If it’s about a topic that recently hit the front page and it adds something new about that, it could luck out. Why luck in this case? Because you probably don’t know ahead of submitting that people will care to read even more about some topic even if it was popular the day before. Perhaps instead people are tired of the topic.</p><p>- The other things submitted the same day did not gain enough traction to push this thing away.</p><p>- Evergreen topics that have not gotten traction in a while but that people care about.</p><p>- Topics that people in university and college are currently learning about so it catches their attention. I dunno how big the amount of people currently in university is versus people that are in jobs. But I remember that I learned about HN from some other students in a student union I was in back then. And I don’t know how students HN reading habits are compared to people in jobs either. I remember reading HN a lot when at the university. But I still read HN a lot. These days I read HN in the morning, the evening and at night though, not when I am working. But even if you have a job you might read HN in the lunch break, or perhaps you have some downtime where you are waiting for something at work and you read HN for a while.</p><p>There are other possible factors too that I have thought about in the past but these are the ones I can think of right now.</p><p>Please note that all of what I am saying here is only my thoughts based on my own habits and from what I’ve heard other people say and what I’ve seen.</p>",
                  children: [
                    {
                      id: 25341558,
                      created_at: "2020-12-08T03:53:01.000Z",
                      author: "OJFord",
                      text: "<p>To agree with and concretise what your saying - I think (without actually somehow checking) my most popular submissions have all been something that I was led to by another thing(s) I was reading on HN at the time.</p><p>Whether conscious or not (probably mostly conscious) I think they simply had the same temporal relevance for other people as they did for me.</p><p>All that said, I don&#x27;t know what it would be in this case. I expect I&#x27;ll find it useful though, being not really a JS person who does need to write some JS and would rather maintain decent JS than awful.</p><p>What it seems to lack, which I find a sticking point whenever I consider some greenfield personal project, is the dizzying array of &#x27;tooling stuff&#x27; that JS has, and how it does or doesn&#x27;t fit together, etc. There&#x27;s just all sorts of weird layers and not quite equivalents and can be equivalents but could also be used togethers, half the stuff it&#x27;s not even clear what it is or if it&#x27;s necessary at all.</p><p>I really hope wasm brings more <i>different</i> options (hard to phrase that to not sound hypocritical!) one day; that we just have some tiny JS shim that everyone uses, and other than that it&#x27;s totally arbitrary which language and ecosystem you use, JS an option, but no more obvious than anything else.</p>",
                      children: [
                        {
                          id: 25347035,
                          created_at: "2020-12-08T16:04:57.000Z",
                          author: "RobertKerans",
                          text: '<p>&gt; What it seems to lack, which I find a sticking point whenever I consider some greenfield personal project, is the dizzying array of &#x27;tooling stuff&#x27; that JS has, and how it does or doesn&#x27;t fit together, etc. There&#x27;s just all sorts of weird layers and not quite equivalents and can be equivalents but could also be used togethers, half the stuff it&#x27;s not even clear what it is or if it&#x27;s necessary at all.</p><p>Aha, yes, this. I am [currently] a JavaScript person and it is a shitshow. The cliché used to point and laugh at JS is framework churn, but that&#x27;s not really much of a thing [imo], it&#x27;s the tooling. The tools can be genuinely very good <i>if</i> you pick the right combination in the right context, but that&#x27;s often more luck than judgement.</p><p>I suspect as wasm usage becomes more widespread, it&#x27;ll get worse, not better, at least for a while. There&#x27;s always a shining future to hope for (and despite the gripes, things have generally improved steadily over the years, so not <i>too</i> idealistic a hope).</p><p>If Rome[1] fulfils its goals (big if), then you might get what you want. Very early days though, and going to be very hard for the maintainers to keep control as the scope of the project expands.</p><p>Aside, but I think it would be interesting to figure out how much cargo culting is going on with JS tooling. Theory: most configurations of tooling beyond &quot;install CRA&#x2F;similar&quot; are built up via Googling done when building out highly context-specific configs -&gt; that brings back articles on how to set up tooling that was specific to the author&#x27;s particular situation -&gt; they are used in lieu of the tool&#x27;s documentation because Things Just Need To Get Done Now and it&#x27;s just some dev dependencies, whatever -&gt; those configs are used in a situation they aren&#x27;t needed -&gt; process repeats.</p><p>[1] <a href="https:&#x2F;&#x2F;rome.tools&#x2F;" rel="nofollow">https:&#x2F;&#x2F;rome.tools&#x2F;</a></p>',
                          children: [
                            {
                              id: 25349516,
                              created_at: "2020-12-08T18:36:58.000Z",
                              author: "OJFord",
                              text: "<p>Rome just sounds like XKCD standards.</p><p>It starts off by giving installation instructions for yarn&#x2F;npm&#x2F;npx. Which should I use if I&#x27;m starting a project and I heard on HN Rome is the easy one true way to do it? I don&#x27;t already have yarn or npm or npx so there&#x27;s no existing reason to care, but now I feel I need to find out about them and their potential tradeoffs since it&#x27;s probably easier to choose now than change later.</p><p>And then you get past that and want to use LSP with your editor, and realise it&#x27;s not one tool to rule them all after all anyway!</p>",
                              children: [
                                {
                                  id: 25352870,
                                  created_at: "2020-12-08T23:13:07.000Z",
                                  author: "RobertKerans",
                                  text: "<p>I get the analogy, but build&#x2F;lint&#x2F;format functionalities are currently split across multiple different tools and their many multiple plugins. They aren&#x27;t standards, they&#x27;re just a bunch of tools that people have to glue together every time they create a new project. Attempting to put them together into a single binary with no dependencies isn&#x27;t creating another standard, it&#x27;s just creating a single tool (one similar to those extant for other modern languages).</p><p>I realise you may be being slightly facetious to make a [fair] point, but if not: Yarn and NPM are package managers, NPM comes with Node. npx is a command line tool for npm that generally obseletes most need for globally installing packages, it is a small but nice nice recent improvement to the JS ecosystem.</p><p>LSP is a protocol implemented by plugins for text editors&#x2F;IDEs, it&#x27;s got nothing to do with a specific language, what do you mean by mentioning that?</p>",
                                  children: [
                                    {
                                      id: 25353890,
                                      created_at: "2020-12-09T00:56:08.000Z",
                                      author: "OJFord",
                                      text: "<p>Yarn and npm I&#x27;m familiar with, though I don&#x27;t know why to prefer one over the other. Yarn&#x27;s newer, I suppose that&#x27;s pro or con depending who you talk to. Npx I had no idea.</p><p>LSP has two parts, a client implented by an editor (or plugin for one), and a server for whichever specific language.</p><p>If you always use vim but several languages, you need one language client for vim, and a language server for, yes, each specific language you want to write with it. `vls` for example for vue&#x2F;js&#x2F;etc. distributed with `vetur` which is God knows what also distributing God knows what else, and the rabbit hole continues. :)</p><p>(And your language server might be the only linter and formatter you need&#x2F;want, so they&#x27;re then wasted being in Rome, is what made me think of it.)</p>",
                                      children: [
                                        {
                                          id: 25357882,
                                          created_at:
                                            "2020-12-09T12:37:42.000Z",
                                          author: "RobertKerans",
                                          text: "<p>&gt; Yarn and npm I&#x27;m familiar with, though I don&#x27;t know why to prefer one over the other. Yarn&#x27;s newer, I suppose that&#x27;s pro or con depending who you talk to</p><p>So Yarn was created to deal with issues in NPM (amongst other things: speed, problems with package duplication, no lockfile). AFAICS from watching Ryan Dahl talking about the process of his developing Node, NPM was kind of an afterthought, so it has some flaws that are difficult to fix because they&#x27;re so ingrained into how Node works.</p><p>So Yarn [v1] has a very similar API, and uses the NPM registry, and works in a very similar way (dependencies go in node_modules, etc etc). Most of the time, when you see the choice, the author of the documentation is talking about NPM vs. Yarn v1.</p><p>Competition from Yarn [v1] was a generally good thing despite the slight confusion it causes, because what it did was force NPM to update to include some of Yarn&#x27;s better features, in an attempt to gain feature parity.</p><p>The existence of Yarn <i>v2</i> is also now [imo] important because of its two main features that differentiate it from NPM. Its API is basically the same as NPM, but the way it works is not, and yes, it&#x27;s confusing. It works (and works very well), but I think its core value (and the reason why IMO it should be pushed alongside NPM <i>despite</i> the confusion that is likely to cause) is that it&#x27;s acting as a testbed for features that are probably useful to the JS ecosystem. And the wider the usage, the more those features can be battle tested:</p><p>- it has full support for monorepos (storing all code for all associated projects in a single repo) which can make development easier in what would seem to be a large set of contexts.</p><p>- it allows a user to dispense with node_modules through a mechanism called plug and play. Dependency management is much better than NPM, issues with dependencies are easier to locate, and unless there are new deps added, there is no install step after the initial one (I can push my code to a repo, someone can clone the repo and just start the application immediately). This IME has fairly significant DX benefits, as well as making CI tasks take significantly less time and resource.</p>",
                                          children: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 25338702,
          created_at: "2020-12-07T22:40:59.000Z",
          author: "meow_mix",
          text: "<p>I swear this tutorial comes out fresh every other month</p>",
          children: [],
        },
        {
          id: 25334096,
          created_at: "2020-12-07T17:07:41.000Z",
          author: "alfonsodev",
          text: "<p>The ninja code section is pure sarcasm, right?</p><p>I&#x27;m not sure now which sections are and aren&#x27;t.</p>",
          children: [
            {
              id: 25334584,
              created_at: "2020-12-07T17:41:32.000Z",
              author: "speedgoose",
              text: '<p>Interestingly Golang encourages one letter variable names and it&#x27;s not sarcasm this time : <a href="https:&#x2F;&#x2F;github.com&#x2F;golang&#x2F;go&#x2F;wiki&#x2F;CodeReviewComments#variable-names" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;golang&#x2F;go&#x2F;wiki&#x2F;CodeReviewComments#variabl...</a></p><p>Golang&#x27;s landscape is full of one letter variables and abbreviations and it&#x27;s not great.</p>',
              children: [
                {
                  id: 25334944,
                  created_at: "2020-12-07T18:06:39.000Z",
                  author: "Philip-J-Fry",
                  text: "<p>It&#x27;s only encouraged within certain contexts. Like it says, short lived stuff can be named &quot;x&quot; or &quot;i&quot;. We already do this in almost every language. &quot;c&quot; for &quot;count&quot; or &quot;i&quot; for &quot;index&quot; isn&#x27;t specific to Go, I&#x27;ve seen and done that in every language I&#x27;ve used.</p><p>Stuff that isn&#x27;t easily understood should be named appropriately but shortness is encouraged.</p><p>If you&#x27;re storing an index in a global variable or a struct field then it should be called &quot;index&quot; not &quot;i&quot;.</p><p>Method receivers are usually always kept short because they&#x27;re pretty self explanatory and the first thing you look at in a function.</p>",
                  children: [
                    {
                      id: 25336166,
                      created_at: "2020-12-07T19:36:07.000Z",
                      author: "ornornor",
                      text: "<p>I never understood that. Is it really that hard to spell out full variable names? It’s so much more legible, there is autocomplete on virtually any editor (even the ones that aren’t IDEs), and you write code once but read it hundreds of times. Why even try to save 8 bytes at the expense of readability?</p>",
                      children: [
                        {
                          id: 25336391,
                          created_at: "2020-12-07T19:51:22.000Z",
                          author: "kinjba11",
                          text: "<p>Short variable names make code more readable in some scenarios, not less.</p><p><pre><code>  fooBarBazThings.each(t =&gt; t.DoThing())\n  for (int i = 0; i &lt; len(things); i++) { &#x2F;&#x2F; i used here }\n</code></pre>\nSome local code patterns are seen so often you understand it in one go. Something like</p><p><pre><code>  fooBarBazThings.each(fooBarBazThing =&gt; fooBarBazThing.DoThing())\n  for (int thingIndex = 0; thingIndex &lt; lengthOfThings; thingIndex += 1) { &#x2F;&#x2F; thingIndex used here }\n</code></pre>\nJust clutters things up.</p>",
                          children: [
                            {
                              id: 25336518,
                              created_at: "2020-12-07T19:59:18.000Z",
                              author: "ornornor",
                              text: "<p>I disagree. I always use descriptive variable names. I have no idea what ‘t’ is. ‘thing’ is 4 bytes more. Not the end of the world, but much more readable. Same for ‘i’ vs ‘index’.</p>",
                              children: [],
                            },
                            {
                              id: 25337061,
                              created_at: "2020-12-07T20:33:46.000Z",
                              author: "drran",
                              text: "<p>Modified obfuscator can make your code even more readable. It can simplify functions in addition to variables. Also, it improves job security, which is important in times of covid.</p>",
                              children: [],
                            },
                            {
                              id: 25337077,
                              created_at: "2020-12-07T20:34:45.000Z",
                              author: "twic",
                              text: "<p>This is a bit of a false dichotomy, because the names don&#x27;t have to be that long.</p><p><pre><code>  fooBarBazThings.each(thing =&gt; thing.DoThing())\n</code></pre>\nIt&#x27;s more useful when the receiver of the method doesn&#x27;t tell you as much, eg:</p><p><pre><code>  getRecentPurchases().values().forEach(price -&gt; priceStats.accept(price));</code></pre></p>",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 25335255,
                      created_at: "2020-12-07T18:26:09.000Z",
                      author: "speedgoose",
                      text: '<p>i and j are very understandle.</p><p>I did browse the go code randomly and for example t, s, and b are terrible variable names in my opinion in this example : <a href="https:&#x2F;&#x2F;github.com&#x2F;golang&#x2F;go&#x2F;blob&#x2F;3ce865d7a0b88714cc433454ae2370a105210c01&#x2F;src&#x2F;html&#x2F;template&#x2F;template.go#L404-L441" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;golang&#x2F;go&#x2F;blob&#x2F;3ce865d7a0b88714cc433454ae...</a></p><p>You can find a lot of code like this.</p>',
                      children: [
                        {
                          id: 25336244,
                          created_at: "2020-12-07T19:41:08.000Z",
                          author: "yarosv",
                          text: "<p>That&#x27;s easy. `b` stands for file</p>",
                          children: [],
                        },
                        {
                          id: 25336529,
                          created_at: "2020-12-07T19:59:54.000Z",
                          author: "earthboundkid",
                          text: "<p>That strikes me as perfectly readable. t for template, b for bytes, and s for string. What else would you call them?</p>",
                          children: [
                            {
                              id: 25337121,
                              created_at: "2020-12-07T20:37:37.000Z",
                              author: "drran",
                              text: "<p>template, file, text</p>",
                              children: [
                                {
                                  id: 25338450,
                                  created_at: "2020-12-07T22:18:28.000Z",
                                  author: "earthboundkid",
                                  text: "<p>Is file a file object? A file path?</p><p>All three are “the template”. So, they use polish-ish notation: the template as []byte, template as string, and template as *template.Template.</p>",
                                  children: [
                                    {
                                      id: 25339019,
                                      created_at: "2020-12-07T23:09:26.000Z",
                                      author: "drran",
                                      text: "<p>In just two hours we discovered so much! Let&#x27;s keep digging.</p>",
                                      children: [
                                        {
                                          id: 25341180,
                                          created_at:
                                            "2020-12-08T03:01:31.000Z",
                                          author: "earthboundkid",
                                          text: "<p>I’m not sure I follow. Is two hours a long time or a short time?</p><p>I use Go a lot, so I’m used to it’s conventions. b for bytes is obvious to me because I know ReadFile returns bytes (not a file handle or a buffer), but I can see why if you lack context, it can look odd. OTOH, I don’t use Rust, so when I read snippets with &#x27;a lifetimes, they always look “wrong” to me.</p>",
                                          children: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: 25337181,
                              created_at: "2020-12-07T20:40:53.000Z",
                              author: "yarosv",
                              text: "<p>Sure, what bothers me is how inconsistent it is. Function parameter of type Template is `t` but local variable of type Template is `tmpl`.</p>",
                              children: [
                                {
                                  id: 25341194,
                                  created_at: "2020-12-08T03:02:53.000Z",
                                  author: "earthboundkid",
                                  text: "<p>Yes, I would have named the other one returnTmpl or something.</p>",
                                  children: [],
                                },
                              ],
                            },
                            {
                              id: 25337016,
                              created_at: "2020-12-07T20:30:44.000Z",
                              author: "speedgoose",
                              text: "<p>template, bytes, string.</p>",
                              children: [
                                {
                                  id: 25338292,
                                  created_at: "2020-12-07T22:06:23.000Z",
                                  author: "earthboundkid",
                                  text: "<p>`bytes` is the name of a stdlib package. `string` is the name of a built in type. `template` is technically available, but only because it’s the name of this package, so it can’t refer to itself.</p>",
                                  children: [
                                    {
                                      id: 25343477,
                                      created_at: "2020-12-08T09:39:42.000Z",
                                      author: "speedgoose",
                                      text: "<p>True, but they are all available. The stdlib bytes packages is not loaded, and it&#x27;s valid to use `string` as a variable name, I just tried.</p><p>But even if these names were not available, I don&#x27;t think using `tpl` or `t` or `b` is what should be preferred.</p>",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 25334951,
                  created_at: "2020-12-07T18:07:00.000Z",
                  author: "vsareto",
                  text: "<p>I kind of agree with their reasoning, the exception being when you can have a lot of complicated looping&#x2F;control flow breaks or transient variables close to their usage. Seeing &#x27;array[i][j][k]&#x27; is never fun.</p>",
                  children: [],
                },
              ],
            },
            {
              id: 25335213,
              created_at: "2020-12-07T18:23:22.000Z",
              author: "flixic",
              text: "<p>It is hilarious. Lao Tzu quotes make it simply perfect.</p>",
              children: [
                {
                  id: 25336662,
                  created_at: "2020-12-07T20:08:54.000Z",
                  author: "earthboundkid",
                  text: "<p>It is funnier to me because the quotes are actual historical quotes (to be fair, there probably was no &quot;Laozi&quot; historically), whereas you see fake quotes for Laozi&#x2F;Confucius&#x2F;Buddha all over the internet.</p>",
                  children: [],
                },
              ],
            },
            {
              id: 25334197,
              created_at: "2020-12-07T17:15:12.000Z",
              author: "jeffmcmahan",
              text: "<p>It has an alert at the top that says, &quot;Irony Detected&quot;.</p>",
              children: [],
            },
            {
              id: 25335242,
              created_at: "2020-12-07T18:25:06.000Z",
              author: "wsc981",
              text: '<p>The Ninja code section seem to have been largely based on this classic article, which I personally found more humorous to read: <a href="https:&#x2F;&#x2F;github.com&#x2F;Droogans&#x2F;unmaintainable-code?fbclid=IwAR1oOptBo03hr_aX6TwQm5ZfS6x4HpS71weBoMbN3IDo7XBmyF9jT12is18" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;Droogans&#x2F;unmaintainable-code?fbclid=IwAR1...</a></p>',
              children: [],
            },
            {
              id: 25334227,
              created_at: "2020-12-07T17:16:39.000Z",
              author: "Zhyl",
              text: '<p>That page has an &#x27;irony warning&#x27; so just watch out for those on other pages!</p><p>It might just be my sense of humour (I&#x27;m the sort of person that doesn&#x27;t need an &#x27;&#x2F;s&#x27; tag and feels that it shouldn&#x27;t be necessary <i>if you told the joke properly</i>), but it was pretty obvious to me even without the irony warning that the page was intended as a joke.</p><p>It looks like it was heavily inspired by the classic &#x27;Tao of Programming&#x27; [0]. It uses a very similar style and even quotes the actual Tao Te Ching.</p><p>[0] <a href="http:&#x2F;&#x2F;www.mit.edu&#x2F;~xela&#x2F;tao.html" rel="nofollow">http:&#x2F;&#x2F;www.mit.edu&#x2F;~xela&#x2F;tao.html</a></p>',
              children: [
                {
                  id: 25334796,
                  created_at: "2020-12-07T17:55:31.000Z",
                  author: "hutzlibu",
                  text: "<p>I am with you on not wanting or needing to see &#x2F;s ... but on a tutorial, where people actually struggle to understand anything at first read, using unmarked irony is maybe not the most helpful for them.</p><p>Oh and a second thought on &#x2F;s. For some time I only got my news through satire sites like the onion.\nAnd after I switched back to &quot;real news&quot; sites, I could not believe it was not satire. I mean come on, the world and the internet was always full of dumb people, but when even very high ranking people and institution say really out of the world things in all seriousness - I came to the conclusion, marking irony as irony is sadly sometimes important, in those interesting times we live ...</p>",
                  children: [
                    {
                      id: 25335985,
                      created_at: "2020-12-07T19:20:55.000Z",
                      author: "Sohcahtoa82",
                      text: "<p>Yeah, when we live in a world where people <i>legitimately</i> believe that Bill Gates is trying to use COVID vaccines to install microchips into people, you can&#x27;t always be sure that someone giving an insane opinion isn being ironic or sarcastic.</p>",
                      children: [
                        {
                          id: 25336069,
                          created_at: "2020-12-07T19:29:23.000Z",
                          author: "hutzlibu",
                          text: "<p>I mean, we allways had flat earthers (even though I couldn&#x27;t believe they were serious either, when I first stumbled upon them).</p><p>But this new level is a bit unsettling.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 25334234,
              created_at: "2020-12-07T17:17:30.000Z",
              author: "colmvp",
              text: "<p>The section is clearly dripping with irony. They even have an &quot;Irony detected&quot; box at the very top which acts as the sarcasm&#x2F;satire tag so many people seem to use to bang over our heads that it&#x27;s not serious.</p>",
              children: [],
            },
          ],
        },
        {
          id: 25338962,
          created_at: "2020-12-07T23:03:59.000Z",
          author: "yudlejoza",
          text: "<p>&gt; ... how it&#x27;s done now</p><p>Intro section has no context, especially how this relates to Crockford&#x27;s &quot;the good parts&quot;.</p><p>Is it inspired by it, in conflict with it, a superset, a subset? How did newer standards affect it? how is &#x27;modern&#x27; defined? How is &#x27;now&#x27; defined?</p>",
          children: [],
        },
        {
          id: 25335382,
          created_at: "2020-12-07T18:35:04.000Z",
          author: "priyatham_",
          text: "<p>This site is absolutely awesome and I would suggest this to new comers and experienced folks alike. It covers all things related to javascript, explains the concepts really well in a practical day to day application point of view.</p><p>I might be sounding like a promoter for it, but it really added a lot of value for me personally, so just wanted to spread the good word.</p>",
          children: [
            {
              id: 25344674,
              created_at: "2020-12-08T13:21:41.000Z",
              author: "arebhaibhai",
              text: "<p>I just wish it didn&#x27;t have Disqus :(</p>",
              children: [
                {
                  id: 25345994,
                  created_at: "2020-12-08T14:59:47.000Z",
                  author: "nerdponx",
                  text: "<p>What&#x27;s wrong with Disqus? Seems relatively benign among things that people might be tempted to force upon the people who use their site.</p>",
                  children: [],
                },
                {
                  id: 25344721,
                  created_at: "2020-12-08T13:27:30.000Z",
                  author: "seddin",
                  text: "<p>The addon Privacy Badger blocks it by default.</p>",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 25337689,
          created_at: "2020-12-07T21:18:58.000Z",
          author: "longnow",
          text: "<p>There is a chapter called ‘ninja code’, which is full of terrible advice. A small example.</p><p>&gt; The ideal name for a variable is data. Use it everywhere you can.</p><p>There is one small comment at the top of the chapter, which says ‘Irony detected’. Is there really a whole chapter written Ironically? It would be very easy to read this and think it was real advice.</p><p>(And if it is real advice, and I’m completely misunderstanding, then I can’t possibly recommend this book).</p>",
          children: [
            {
              id: 25339907,
              created_at: "2020-12-08T00:39:14.000Z",
              author: "abhishekjha",
              text: '<p>This reminded me of a brilliant and hilarious presentation on microservices : <a href="https:&#x2F;&#x2F;youtu.be&#x2F;X0tjziAQfNQ" rel="nofollow">https:&#x2F;&#x2F;youtu.be&#x2F;X0tjziAQfNQ</a></p>',
              children: [],
            },
            {
              id: 25338125,
              created_at: "2020-12-07T21:53:04.000Z",
              author: "hanoz",
              text: "<p><i>&gt;There is one small comment at the top of the chapter, which says ‘Irony detected’.</i></p><p>The whole chapter is littered with clearly tongue in cheek remarks.</p>",
              children: [
                {
                  id: 25338308,
                  created_at: "2020-12-07T22:07:34.000Z",
                  author: "ehutch79",
                  text: "<p>People will absolutely not get that and take the advice to heart.</p>",
                  children: [
                    {
                      id: 25338946,
                      created_at: "2020-12-07T23:01:59.000Z",
                      author: "tasuki",
                      text: "<p>I doubt many will. It&#x27;s not subtle.</p>",
                      children: [],
                    },
                    {
                      id: 25341872,
                      created_at: "2020-12-08T04:37:40.000Z",
                      author: "bigiain",
                      text: "<p>I see you&#x27;ve met the entire front end team where I work...</p>",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: 25338651,
              created_at: "2020-12-07T22:36:38.000Z",
              author: "mekoka",
              text: "<p>I think that page would benefit to first more clearly define what a JavaScript <i>Ninja</i> is and why it&#x27;s good for you to become one. Something along the lines:</p><p><i>&quot;A JavaScript Ninja writes code that is brilliantly mysterious. When people read such code it should induce confusion and if at all possible, fear. Clarity is for the feeble. Obviousness is overrated. Obfuscation and secrecy: that is the way of the Ninja. So, how do you become a Ninja?&quot;</i></p>",
              children: [],
            },
            {
              id: 25344182,
              created_at: "2020-12-08T12:06:05.000Z",
              author: "strogonoff",
              text: "<p>&gt; There is a chapter called ‘ninja code’, which is full of terrible advice.</p><p>How someone interprets a tongue-in-cheek chapter could be a good litmus test of their reading comprehension, grasp on the fundamentals, and (last, but not the least) basic sense of humour. I’d hate to see it removed.</p><p>If someone takes this section literally, I would be immensely curious how they reconciled in their mind that advice with what they (supposedly) read in preceding sections.</p>",
              children: [],
            },
            {
              id: 25338328,
              created_at: "2020-12-07T22:09:15.000Z",
              author: "lucideer",
              text: "<p>I understand that often subtleties of language, particularly when it comes to irony or sarcasm, can be lost in textual content (particularly supposedly-formal content like educational materials), and that generally this is something to be avoided.</p><p>However, after reading that chapter, I really can&#x27;t help thinking that you simply weren&#x27;t paying any attention.</p><p>It&#x27;s not just written in sarcastic tone (something that yes, could be easy to miss for many), but it&#x27;s also littered with active dissuasion and explicit explanations of the pitfalls of using this style.</p><p>Examples:</p><p>&gt; <i>If you write like that, a developer who comes across this line and tries to understand what is the value of i is going to have a merry time. Then come to you, seeking for an answer.</i></p><p>&gt; <i>A quick read of such code becomes impossible. And when there’s a typo… Ummm… We’re stuck for long</i></p><p>&gt; <i>A fellow programmer who wants to work with elem in the second half of the function will be surprised… Only during the debugging, after examining the code they will find out that they’re working with a clone!</i></p><p>&gt; <i>First, the code becomes longer and less readable, and the second, a fellow developer may spend a long time trying to figure out what the underscores mean.</i></p><p>You can argue that the chapter is inappropriate, but I don&#x27;t think you can reasonably argue that it&#x27;s misleading.</p>",
              children: [],
            },
            {
              id: 25337820,
              created_at: "2020-12-07T21:29:22.000Z",
              author: "mcgingras",
              text: "<p>yes, it&#x27;s a whole chapter written ironically. I too find this to be misleading.</p>",
              children: [],
            },
          ],
        },
        {
          id: 25334115,
          created_at: "2020-12-07T17:08:53.000Z",
          author: "nailer",
          text: "<p>The default way promises are used is now async&#x2F;await. `.then()` should not be introduced as anything more than &#x27;you may find this in older codebases&#x27;.</p>",
          children: [
            {
              id: 25334360,
              created_at: "2020-12-07T17:26:38.000Z",
              author: "golergka",
              text: "<p>async&#x2F;await is excellent syntax when you want things to happen one after another. That&#x27;s the usual case, and that&#x27;s what I find myself using 95% of the time.</p><p>However, when you want a more fine-grained concurrent execution of different asynchronous things, then() still could be very useful.</p>",
              children: [
                {
                  id: 25335101,
                  created_at: "2020-12-07T18:16:45.000Z",
                  author: "postalrat",
                  text: "<p>Can you give an example of more fine grained control with then?</p>",
                  children: [
                    {
                      id: 25335448,
                      created_at: "2020-12-07T18:40:35.000Z",
                      author: "golergka",
                      text: "<p>const [result1, result3] = await Promise.all([task1(), task2.then(res =&gt; task3(res))])</p>",
                      children: [
                        {
                          id: 25336281,
                          created_at: "2020-12-07T19:43:46.000Z",
                          author: "postalrat",
                          text: "<p>Could that be written</p><p><pre><code>  const task2then3 = async () =&gt; task3(await task2());\n  const [result1, result3] = await Promise.all([task1(), task2then3()])</code></pre></p>",
                          children: [],
                        },
                        {
                          id: 25343982,
                          created_at: "2020-12-08T11:29:20.000Z",
                          author: "nailer",
                          text: "<p>I&#x27;d just:</p><p><pre><code>    async function getResult3(){\n      const res = await task2()\n      return task3(res))\n    }\n\n    const [result1, result3] = await Promise.all([task1(), \n    getResult3()])</code></pre></p>",
                          children: [],
                        },
                      ],
                    },
                    {
                      id: 25335492,
                      created_at: "2020-12-07T18:44:32.000Z",
                      author: "wa1987",
                      text: "<p>Often times operations are order-independent. Specifying those as sequential `await`-s does not make a lot of sense in those situations. I guess less fine grained control is desirable under such circumstances :-)</p><p>There&#x27;s also other useful utilities such as Promise.all(), Promise.any() and Promise.race().</p>",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: 25335147,
              created_at: "2020-12-07T18:19:10.000Z",
              author: "postalrat",
              text: "<p></p><p><pre><code>  (async () =&gt; { set(await get()); })();\n \n  get().then(r =&gt; set(r));\n</code></pre>\nIgnoring error handling I&#x27;ll often choose the second option.</p>",
              children: [
                {
                  id: 25343935,
                  created_at: "2020-12-08T11:19:24.000Z",
                  author: "nailer",
                  text: "<p>OK. I&#x27;ll do:</p><p><pre><code>  const result = await get()\n  set(result)\n</code></pre>\nBut you do you.</p><p>Current node and console have top level await BTW.</p>",
                  children: [
                    {
                      id: 25359432,
                      created_at: "2020-12-09T15:25:36.000Z",
                      author: "postalrat",
                      text: "<p>That only works in an async function. The then example doesn&#x27;t  have that requirement. So the alternative shouldn&#x27;t either.</p>",
                      children: [
                        {
                          id: 25362136,
                          created_at: "2020-12-09T18:36:11.000Z",
                          author: "nailer",
                          text: '<p>Yes, your example isn&#x27;t complaining about then() being clearer than await (because it isn&#x27;t) but rather complaining that top level await isn&#x27;t everywhere yet.</p><p>In other words, your complaints have disappeared in node, and will soon in browsers: <a href="https:&#x2F;&#x2F;github.com&#x2F;tc39&#x2F;proposal-top-level-await" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;tc39&#x2F;proposal-top-level-await</a></p><p>So yes:</p><p><pre><code>    set(await get())</code></pre></p>',
                          children: [
                            {
                              id: 25387998,
                              created_at: "2020-12-11T17:08:28.000Z",
                              author: "postalrat",
                              text: "<p>Sometimes you may need to handle a promise in a function that can&#x27;t be made async.</p>",
                              children: [
                                {
                                  id: 25391863,
                                  created_at: "2020-12-11T22:03:11.000Z",
                                  author: "nailer",
                                  text: "<p>If a function is inherently sync, then it shouldn&#x27;t be using promises.</p>",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 25336023,
                  created_at: "2020-12-07T19:24:38.000Z",
                  author: "Rumudiez",
                  text: "<p>Much cleaner. You can go even further by using point-free style:</p><p><pre><code>    get().then(set)\n</code></pre>\nIt&#x27;s the try&#x2F;catch blocks that make async&#x2F;await truly worse than native promises. I use them sparingly because so often the .then syntax is both clearer and terser.</p>",
                  children: [
                    {
                      id: 25336296,
                      created_at: "2020-12-07T19:45:31.000Z",
                      author: "postalrat",
                      text: "<p>What don&#x27;t you like about try&#x2F;catch? I find the opposite true, the .then&#x2F;.catch is more confusing.</p>",
                      children: [
                        {
                          id: 25337251,
                          created_at: "2020-12-07T20:46:11.000Z",
                          author: "Rumudiez",
                          text: "<p>try&#x2F;catch introduces new block scopes and interrupt control flow. I find this example very readable, but expanding it into try&#x2F;catches would make it rather long winded and harder to see the pattern at work as you extend the sequence:</p><p><pre><code>    get()\n        .then(handleResult)\n        .catch(useFallbackResult)\n        .then(updateState)\n</code></pre>\nI prefer concision and functional expressiveness because it reduces the surface area for writing buggy code. Much like how using map instead writing a for loop can eliminate out of range index bugs, chaining promises brings useful guarantees about how the code I do write can be interpreted.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 25334190,
              created_at: "2020-12-07T17:14:48.000Z",
              author: "jedimastert",
              text: "<p>Can you point to anything other than saying &quot;this is obvious&quot;?</p>",
              children: [
                {
                  id: 25334251,
                  created_at: "2020-12-07T17:18:40.000Z",
                  author: "nailer",
                  text: "<p>No, just experience with a lot of codebases.</p><p>Here&#x27;s a simple question to ask yourself: what if non-IO operations allowed you to use the .then() syntax? If you have the choice to use:</p><p><pre><code>   1 + 1.then(function(result) { ... }\n</code></pre>\nvs</p><p><pre><code>   const result = 1 + 1\n</code></pre>\nWhich would you choose?</p>",
                  children: [
                    {
                      id: 25334327,
                      created_at: "2020-12-07T17:24:14.000Z",
                      author: "pavlov",
                      text: "<p>Using then() doesn&#x27;t pause execution of the callsite function, while await does. Surely that&#x27;s a relevant difference here?</p><p>It doesn&#x27;t seem unreasonable to use then() to express: &quot;Run this anonymous function whenever the async thing completes. Meanwhile let&#x27;s do this other stuff right now.&quot;</p>",
                      children: [
                        {
                          id: 25334842,
                          created_at: "2020-12-07T17:59:22.000Z",
                          author: "nailer",
                          text: "<p>Both codebases can&#x27;t do anything until `result` has a value.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 25334456,
              created_at: "2020-12-07T17:32:37.000Z",
              author: "verisimilidude",
              text: "<p>That’s probably good general advice.</p><p>One problem. I’m increasingly coming across devs who’ve never used Promises directly, only async&#x2F;await. They’re introducing all kinds of problems into code because they don’t have that foundational understanding of Promises. I think it’s essential to know how Promises work, even if we generally recommend async&#x2F;await.</p><p>Also, Promise interface can do things that async&#x2F;await cannot, such as Promise.all, and other unusual async execution scenarios. It’s important to have those tools in your belt.</p>",
              children: [
                {
                  id: 25334926,
                  created_at: "2020-12-07T18:05:28.000Z",
                  author: "nailer",
                  text: "<p>100%, people should definitely understand Promise.all() and Promise.any().</p>",
                  children: [],
                },
                {
                  id: 25343955,
                  created_at: "2020-12-08T11:23:41.000Z",
                  author: "nailer",
                  text: "<p>&gt; Promise interface can do things that async&#x2F;await cannot, such as Promise.all</p><p>PS I should clarify await and Promise.all&#x2F;any work fine:</p><p><pre><code>    await Promise.all(items)</code></pre></p>",
                  children: [],
                },
              ],
            },
            {
              id: 25334263,
              created_at: "2020-12-07T17:19:52.000Z",
              author: "ericwood",
              text: "<p>Maybe some codebases mandate it, but it&#x27;s very common to use either style when it makes the most sense. The classic syntax is by no means deprecated or superseded by async&#x2F;await.</p>",
              children: [],
            },
            {
              id: 25334526,
              created_at: "2020-12-07T17:38:08.000Z",
              author: "throw_m239339",
              text: "<p>&gt;  The default way promises are used is now async&#x2F;await. `.then()` should not be introduced as anything more than &#x27;you may find this in older codebases&#x27;.</p><p>No, because you might have to write explicit promises in the browser with async API that are callback based.</p><p>You need to understand how promises work to use async&#x2F;await at first place anyway.</p><p>Just like it&#x27;s better to understand how prototypal inheritance works in JS BEFORE even using a single class declaration.</p>",
              children: [
                {
                  id: 25342039,
                  created_at: "2020-12-08T04:58:21.000Z",
                  author: "nailer",
                  text: "<p>Yes because you can and should promisify old libraries.</p>",
                  children: [
                    {
                      id: 25342679,
                      created_at: "2020-12-08T07:01:42.000Z",
                      author: "throw_m239339",
                      text: "<p>No because some async Web API are just a bit more complex than just &#x27;promisify&#x27; this or that.</p>",
                      children: [
                        {
                          id: 25343930,
                          created_at: "2020-12-08T11:18:20.000Z",
                          author: "nailer",
                          text: "<p>Which ones?</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 25334876,
                  created_at: "2020-12-07T18:01:42.000Z",
                  author: "hutzlibu",
                  text: "<p>&quot;Just like it&#x27;s better to understand how prototypal inheritance works in JS BEFORE even using a single class declaration. &quot;</p><p>About that, does JS class inheritance now work like classes in java for example? Or is it still just syntactic sugar for the prototype inheritance? By your wording, I assume the later?</p>",
                  children: [
                    {
                      id: 25335375,
                      created_at: "2020-12-07T18:34:29.000Z",
                      author: "wa1987",
                      text: '<p>Well, it&#x27;s complicated :-)</p><p><a href="https:&#x2F;&#x2F;stackoverflow.com&#x2F;questions&#x2F;36419713&#x2F;are-es6-classes-just-syntactic-sugar-for-the-prototypal-pattern-in-javascript" rel="nofollow">https:&#x2F;&#x2F;stackoverflow.com&#x2F;questions&#x2F;36419713&#x2F;are-es6-classes...</a></p>',
                      children: [
                        {
                          id: 25335591,
                          created_at: "2020-12-07T18:50:52.000Z",
                          author: "hutzlibu",
                          text: "<p>Wow. I was hoping, at some point things would improve a bit.</p>",
                          children: [
                            {
                              id: 25335692,
                              created_at: "2020-12-07T18:57:13.000Z",
                              author: "wa1987",
                              text: "<p>Agreed. I find myself using a pretty small subset of the language which definitely doesn&#x27;t include the class keyword. Doubt I&#x27;ll ever find it useful.</p>",
                              children: [
                                {
                                  id: 25336035,
                                  created_at: "2020-12-07T19:25:48.000Z",
                                  author: "hutzlibu",
                                  text: "<p>Yeah, like many people, I ended up making my own inheritance routines. Then when class came out, I was half rejoicing, half regretting to put up the work. But well, no thanks. I rather keep using my own far from perfect way of things.</p>",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 25335669,
                      created_at: "2020-12-07T18:55:53.000Z",
                      author: "ragnese",
                      text: "<p>Correct. It&#x27;s still prototype based. Thus making the class keyword actually MORE confusing for people from other languages, IMO.</p>",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 25340259,
          created_at: "2020-12-08T01:11:53.000Z",
          author: "z3t4",
          text: "<p>JavaScript has some really nice features that this tutorial does not mention 1) First class functions 2) Prototype 3) Function scope 4) What async means and how to master it\nThose I think is essential in order to understand JavaScript.</p>",
          children: [
            {
              id: 25341382,
              created_at: "2020-12-08T03:27:47.000Z",
              author: "SPBS",
              text: '<p>This website covers every nitty gritty detail of javascript, even DOM specific aspects like <a href="https:&#x2F;&#x2F;javascript.info&#x2F;bubbling-and-capturing" rel="nofollow">https:&#x2F;&#x2F;javascript.info&#x2F;bubbling-and-capturing</a> (just look at how well it is written). I would be highly surprised if it did not even mention those javascript basics. A brief look at its table of contents shows that indeed it mentions those, and I am baffled why the other commentor is getting downvoted for calling you out.</p>',
              children: [
                {
                  id: 25344006,
                  created_at: "2020-12-08T11:33:28.000Z",
                  author: "z3t4",
                  text: '<p>For example the article about callbacks basically says &quot;use Promises&quot; which is even more complicated then first class functions.</p><p>Helpful resource: <a href="http:&#x2F;&#x2F;callbackhell.com&#x2F;" rel="nofollow">http:&#x2F;&#x2F;callbackhell.com&#x2F;</a></p>',
                  children: [],
                },
              ],
            },
            {
              id: 25340926,
              created_at: "2020-12-08T02:29:15.000Z",
              author: "fogetti",
              text: "<p>What are you talking about? Did you even take a look at the table of contents?</p>",
              children: [
                {
                  id: 25341435,
                  created_at: "2020-12-08T03:34:42.000Z",
                  author: "rfrey",
                  text: "<p>I didn’t downvote, but calling people out for not reading the article — even if it seems blindingly true — is against HN rules and always gets downvoted.</p>",
                  children: [
                    {
                      id: 25352966,
                      created_at: "2020-12-08T23:21:43.000Z",
                      author: "rfrey",
                      text: "<p>Now I&#x27;m being downvoted because my comment seems like a non-sequitur. But prior to an edit, my parent was wondering why they were being downvoted, which is what I replied to.</p>",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 25334119,
          created_at: "2020-12-07T17:09:02.000Z",
          author: "ddoolin",
          text: "<p>I&#x27;ve had this site&#x27;s Regex section bookmarked for awhile and it&#x27;s been a great tutorial and reference. I can&#x27;t speak to the other content but if it&#x27;s similar, it would be of good quality.</p>",
          children: [],
        },
        {
          id: 25336168,
          created_at: "2020-12-07T19:36:11.000Z",
          author: "jonnycomputer",
          text: '<p>I looked at this page first and assumed that it was all a gag.</p><p><a href="https:&#x2F;&#x2F;javascript.info&#x2F;ninja-code" rel="nofollow">https:&#x2F;&#x2F;javascript.info&#x2F;ninja-code</a></p><p>&gt;Show your original thinking! Let the call of checkPermission return not true&#x2F;false, but a complex object with the results of the check.</p><p>&gt;Those developers who try to write if (checkPermission(..)), will wonder why it doesn’t work. Tell them: “Read the docs!”. And give this article.</p>',
          children: [
            {
              id: 25336323,
              created_at: "2020-12-07T19:47:48.000Z",
              author: "weaksauce",
              text: "<p>It was tongue in cheek though... the summary tells you as much.</p>",
              children: [
                {
                  id: 25337006,
                  created_at: "2020-12-07T20:30:09.000Z",
                  author: "jonnycomputer",
                  text: "<p>I mean, I read it, and assumed the rest of the guide was also tongue in cheek.</p>",
                  children: [
                    {
                      id: 25337234,
                      created_at: "2020-12-07T20:44:34.000Z",
                      author: "SamBam",
                      text: "<p>Every single example on that page was clear bunk -- showing the worst habits of some developers, and making clear why they are terrible.</p><p>I think if you&#x27;ve gotten as far as that chapter, it would be pretty impossible not to realize it was tongue in cheek.</p><p>At the top of the page is a big warning triangle that says &quot;Irony detected.&quot;</p><p>No other chapter includes such a prominent warning. I think it&#x27;s pretty clear that the &quot;gag&quot; is specific to that chapter.</p>",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: 25336584,
              created_at: "2020-12-07T20:04:35.000Z",
              author: "z3t4",
              text: "<p>Then it will always be truthly if it returns an object, or 0 means success? :)</p><p>The proper way is callback convention err. Then you can write if(!err) ...</p>",
              children: [],
            },
          ],
        },
        {
          id: 25343595,
          created_at: "2020-12-08T10:06:24.000Z",
          author: "lenkite",
          text: "<p>The site is awesome, but I wish they had an all-in-ONE-page option. Navigating through X sections and links is a chore.</p>",
          children: [],
        },
        {
          id: 25334385,
          created_at: "2020-12-07T17:28:06.000Z",
          author: "forest_dweller",
          text: "<p>This site is a great resource. The event delegation section is something I have bookmarked as when entering a new contract I typically don&#x27;t have access to my own code to use as a reference.</p>",
          children: [],
        },
        {
          id: 25334916,
          created_at: "2020-12-07T18:04:43.000Z",
          author: "cosmotic",
          text: "<p>Oh no! It&#x27;s already out of date! (That&#x27;s a JS changes too fast joke)</p><p>But seriously, calling it &#x27;modern&#x27; is pointless. It&#x27;s not adding anything valuable and its just going to become out of date (and thus wrong).</p>",
          children: [
            {
              id: 25335043,
              created_at: "2020-12-07T18:12:57.000Z",
              author: "willio58",
              text: "<p>I think it’s precisely the fact that js is constantly changing that they’ve branded this as “modern”.</p>",
              children: [],
            },
            {
              id: 25335336,
              created_at: "2020-12-07T18:31:20.000Z",
              author: "root_axis",
              text: "<p>It&#x27;s not pointless. In the context of JS &#x27;modern&#x27; generally means es6+ or node as opposed to es5.</p>",
              children: [
                {
                  id: 25336196,
                  created_at: "2020-12-07T19:37:58.000Z",
                  author: "jonnycomputer",
                  text: "<p>just say es6, though, i guess?</p>",
                  children: [],
                },
              ],
            },
            {
              id: 25335098,
              created_at: "2020-12-07T18:16:35.000Z",
              author: "simonw",
              text: "<p>Disagree. I&#x27;ve been writing JavaScript for twenty years, and I&#x27;m very aware that there&#x27;s a lot of &quot;new&quot; stuff that I need to brush up on. When I saw it call itself &quot;modern&quot; I instantly assumed that it would be covering the kind of information I need to know.</p>",
              children: [
                {
                  id: 25335636,
                  created_at: "2020-12-07T18:53:31.000Z",
                  author: "wolfadex",
                  text: "<p>I, as a JS dev of 10+ years, wouldn&#x27;t consider this &quot;modern&quot;. I didn&#x27;t see</p><p>- for in loop\n- for of loop</p><p>as a couple examples, and those have been around for at least a few years now. There&#x27;s probably more missing too. To  what the above person said. The usage of &quot;modern&quot; or &quot;latest&quot; or similar is going to fall behind and make for bad  searching.</p>",
                  children: [
                    {
                      id: 25335787,
                      created_at: "2020-12-07T19:04:07.000Z",
                      author: "wa1987",
                      text: '<p>&gt; - for in loop - for of loop</p><p>It&#x27;s 2020 and you still use loops? ;-)</p><p>source: <a href="https:&#x2F;&#x2F;github.com&#x2F;buildo&#x2F;eslint-plugin-no-loops" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;buildo&#x2F;eslint-plugin-no-loops</a></p>',
                      children: [
                        {
                          id: 25339921,
                          created_at: "2020-12-08T00:40:18.000Z",
                          author: "graup",
                          text: '<p>Disallowing for..of iterators is the reason I cannot use or recommend the Airbnb lint preset. A very nice example of an anno 2014-2017 cargo cult that clearly hasn&#x27;t held up. <a href="https:&#x2F;&#x2F;github.com&#x2F;airbnb&#x2F;javascript&#x2F;issues&#x2F;1271" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;airbnb&#x2F;javascript&#x2F;issues&#x2F;1271</a></p>',
                          children: [
                            {
                              id: 25341195,
                              created_at: "2020-12-08T03:02:55.000Z",
                              author: "BigJono",
                              text: "<p>Don&#x27;t worry, there&#x27;s plenty of 2020 cargo culting to replace it.</p>",
                              children: [],
                            },
                          ],
                        },
                        {
                          id: 25337240,
                          created_at: "2020-12-07T20:45:03.000Z",
                          author: "hombre_fatal",
                          text: "<p>for&#x2F;of is an iterator. It consumes the Symbol.iterator interface and is totally different from the for(i++) statement.</p><p>That eslint rule is a good example of a cargo cult. The second link in its rationalization argues for using underscore over touching a dangerous loop yourself.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 25335482,
                  created_at: "2020-12-07T18:43:59.000Z",
                  author: "joshxyz",
                  text: "<p>i think it&#x27;s great on how it brushed on forms and web api&#x27;s, but in your case it seems exploringjs.com would be a fit (grouped by ecmascript versions).</p><p>OTOH out of scope are server-side JS (NodeJS), transpilers like babel, bundlers like webpack, and of course package managers like npm and yarn</p>",
                  children: [],
                },
              ],
            },
            {
              id: 25335710,
              created_at: "2020-12-07T18:58:29.000Z",
              author: "0df8dkdf",
              text: "<p>to be fair.  anything after &#x27;use strict&#x27; can be consider &#x27;modern&#x27;.  However with the rate ES7 - 10 is going. Yeah this wouldn&#x27;t be modern.</p>",
              children: [],
            },
            {
              id: 25335485,
              created_at: "2020-12-07T18:44:06.000Z",
              author: "mixmastamyk",
              text: "<p>Make a merge request.</p>",
              children: [],
            },
            {
              id: 25334990,
              created_at: "2020-12-07T18:09:33.000Z",
              author: "corytheboyd",
              text: "<p>Honestly, it’s fine if documentation goes out of date, otherwise what’s the point of writing anything at all? The onus is on the reader to check the publish date of what they are reading, and to cross reference it with other sources to ensure accuracy.</p>",
              children: [
                {
                  id: 25335261,
                  created_at: "2020-12-07T18:26:17.000Z",
                  author: "kaycebasques",
                  text: "<p>I&#x27;d be careful about relying on &quot;updated&quot; dates too heavily. As a professional technical writer, I&#x27;ve seen that some people bump the &quot;updated&quot; timestamp for any update, no matter how small. At other times it&#x27;s bumped automatically by the build system. I think the best practice is to only bump the timestamp for substantial updates, or to use an explicit changelog at the bottom of the doc. But that practice isn&#x27;t standardized across docs sites.</p>",
                  children: [
                    {
                      id: 25335416,
                      created_at: "2020-12-07T18:38:00.000Z",
                      author: "corytheboyd",
                      text: "<p>That’s a good point to call out, thanks! There is so much involved in being a “defensive reader” heh</p>",
                      children: [],
                    },
                    {
                      id: 25336195,
                      created_at: "2020-12-07T19:37:54.000Z",
                      author: "olnluis",
                      text: "<p>I encounter this &quot;article update&quot; problem a lot with Java blogs...\nBaeldung instantly comes to mind. Every article I find there was last updated on 2020, but don&#x27;t seem to have actually changed.</p>",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: 25335771,
              created_at: "2020-12-07T19:02:56.000Z",
              author: "brundolf",
              text: "<p>Nothing will become inaccurate, because JS never introduces breaking changes.</p><p>The guide might come to <i>lack</i> some newer things over time, but I doubt those will include any major paradigm shifts, because the past ~10 years have likely been the most dynamic that JS will ever see in terms of idioms and best-practices. JS made a radical shift into a mature language, and now it is mostly on the other side of that transition. So writing a &quot;modern&quot; (post-transition) tutorial makes perfect sense to me, and I don&#x27;t think it will become irrelevant any time soon.</p>",
              children: [
                {
                  id: 25347905,
                  created_at: "2020-12-08T16:56:45.000Z",
                  author: "cosmotic",
                  text: "<p>JS (the language) may never introduce breaking changes, but JS (the ecosystem) sure does. With a quite normal react app, breaking changes are a constant battle. Clone the repo, oops, one package was upgraded that broke another; upgrade that one, oops, it breaks another. The package manager is supposed to deal with that, but it (effectively) doesn&#x27;t.</p>",
                  children: [
                    {
                      id: 25350545,
                      created_at: "2020-12-08T19:59:27.000Z",
                      author: "brundolf",
                      text: "<p>This aspect is irrelevant to the discussion because the OP only covers the language itself.</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 25340029,
                  created_at: "2020-12-08T00:50:32.000Z",
                  author: "reificator",
                  text: '<p>&gt; <i>Nothing will become inaccurate, because JS never introduces breaking changes.</i></p><p>Can you help me debug why `document.createElement(&#x27;button&#x27;).attachEvent(&#x27;onclick&#x27;, e=&gt;alert(&#x27;attachEvent!&#x27;))` isn&#x27;t working then?</p><p>You might object that DOM APIs aren&#x27;t part of JS proper and that&#x27;s true, but this guide covers `addEventListener` on this page: <a href="https:&#x2F;&#x2F;javascript.info&#x2F;introduction-browser-events" rel="nofollow">https:&#x2F;&#x2F;javascript.info&#x2F;introduction-browser-events</a></p><p>Sticking only to JS language features, I assume you can help track down why my `with()` statement doesn&#x27;t work.  Or why `function testing() { console.log(this.location.href); } testing();` throws an error but only if I package my code as an ES Module instead of an AMD bundle.</p><p>I agree that breaking changes like this are increasingly unlikely to happen, and I think the changes that have been made are easily net positive. But the claim that they never happen is simply not true.</p>',
                  children: [
                    {
                      id: 25340362,
                      created_at: "2020-12-08T01:22:09.000Z",
                      author: "brundolf",
                      text: "<p>I do include the DOM API in my statement, but I do not include non-standardized browser APIs, which attachEvent seems to be.</p><p>I&#x27;ll refine my statement to &quot;The JS <i>standard</i> never introduces breaking changes&quot;.</p><p>attachEvent never was part of any standard, and is therefore subject to breakage. Non-standard APIs should never be part of a comprehensive guide to the language in the first place.</p>",
                      children: [
                        {
                          id: 25340431,
                          created_at: "2020-12-08T01:28:27.000Z",
                          author: "reificator",
                          text: '<p>I was worried that leading with `attachEvent` would get a response about only `attachEvent`.</p><p>The `with` statement is described on page 75 of the ES3 standard[0].  It does not work in an ES Module or in a strict mode context.  This is a breaking change.</p><p>[0]: <a href="https:&#x2F;&#x2F;www-archive.mozilla.org&#x2F;js&#x2F;language&#x2F;E262-3.pdf" rel="nofollow">https:&#x2F;&#x2F;www-archive.mozilla.org&#x2F;js&#x2F;language&#x2F;E262-3.pdf</a></p>',
                          children: [
                            {
                              id: 25340556,
                              created_at: "2020-12-08T01:43:07.000Z",
                              author: "brundolf",
                              text: "<p>Strict mode was invented as a way of introducing a handful of &quot;breaking&quot; changes without them actually being breaking, since it&#x27;s opt-in. JavaScript had some egregious design issues from the beginning and strict mode is a remedy to some of them.</p><p>But when most people say &quot;breaking changes&quot; they mean things that suddenly cause legacy code to stop working, and non-strict mode will almost certainly be supported ad infinitum, so I don&#x27;t really count that. It&#x27;s also almost certainly never going to happen again.</p>",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 25347216,
          created_at: "2020-12-08T16:16:04.000Z",
          author: "cphoover",
          text: "<p>Hmmm there are a lot of language footguns or advanced features that don&#x27;t have any disclaimers for beginners. I don&#x27;t think a beginner should be told to use Proxy object handlers before learning the basics of JS, async and functional programming.</p>",
          children: [],
        },
        {
          id: 25335700,
          created_at: "2020-12-07T18:57:38.000Z",
          author: "cercatrova",
          text: "<p>Note that the Russian version of the site has more information than the English version, you can translate the page into English to read it (or just learn Russian)</p>",
          children: [
            {
              id: 25335835,
              created_at: "2020-12-07T19:08:41.000Z",
              author: "polywock",
              text: "<p><i>sighs and opens Russian learning book</i></p>",
              children: [],
            },
            {
              id: 25339525,
              created_at: "2020-12-08T00:01:33.000Z",
              author: "Avtomatk",
              text: "<p>The Russian version simply adds a CSS section for JS developers and an extra page at the end of the first section, I don&#x27;t know if the content of the chapters differs from the English version.</p>",
              children: [
                {
                  id: 25339626,
                  created_at: "2020-12-08T00:11:15.000Z",
                  author: "cercatrova",
                  text: "<p>You&#x27;re right, the English version is now updated, it used to not be as up to date as the Russian version.</p>",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 25336240,
          created_at: "2020-12-07T19:41:01.000Z",
          author: "lxe",
          text: '<p><a href="https:&#x2F;&#x2F;javascript.info&#x2F;ninja-code" rel="nofollow">https:&#x2F;&#x2F;javascript.info&#x2F;ninja-code</a> hah this is a great read :)</p>',
          children: [],
        },
        {
          id: 25344180,
          created_at: "2020-12-08T12:05:42.000Z",
          author: "stevenjgarner",
          text: "<p>Looks like a great resource.  There does not seem to be anything on database connections (e.g. MySQL, \nPostgreSQL etc) and related topics (e.g. building a CRUD framework).  Are database connections only considered in a client&#x2F;server context (e.g. through Node.js)?  What am I missing?  How does the IndexedDB section relate to these considerations?</p>",
          children: [],
        },
        {
          id: 25344956,
          created_at: "2020-12-08T13:48:50.000Z",
          author: "x14km2d",
          text: "<p>The website is really very good. I started to learn JavaScript last week and worked through the JavaScript Wikibook. Unfortunately it is not as complex as the website linked above. I can continue working with it really well. I also like the structure and design, which makes the tutorials really easy to read. A great project.</p>",
          children: [],
        },
        {
          id: 25335747,
          created_at: "2020-12-07T19:01:14.000Z",
          author: "cgrealy",
          text: "<p>Isn’t step 1 of “modern JavaScript” to install TypeScript? :)</p>",
          children: [
            {
              id: 25336428,
              created_at: "2020-12-07T19:53:37.000Z",
              author: "brundolf",
              text: "<p>For real projects, but for someone just getting started I think it makes a lot of sense to start with core language fundamentals (I notice that, at least from the table of contents, there was no mention of build systems or frameworks either). Lots of newly-minted JS devs today know relatively little about what it means to use plain JS, which means they don&#x27;t have as much perspective on what their TypeScript and JSX actually turn into, which has a meaningful effect on informing decisions.</p>",
              children: [],
            },
            {
              id: 25338227,
              created_at: "2020-12-07T22:01:32.000Z",
              author: "bob1029",
              text: "<p>I was half expecting the first page to explain what nodejs is and how to install it. Pleasantly surprised by most of this.</p>",
              children: [],
            },
            {
              id: 25337754,
              created_at: "2020-12-07T21:23:56.000Z",
              author: "jerrygoyal",
              text: "<p>and step 2: install prettier, step 3: eslint plugins.</p>",
              children: [],
            },
            {
              id: 25335804,
              created_at: "2020-12-07T19:05:46.000Z",
              author: "halfmatthalfcat",
              text: "<p>Amazing how many JS devs I meet (or work with) that are against the very idea of Typescript.</p>",
              children: [
                {
                  id: 25342259,
                  created_at: "2020-12-08T05:33:37.000Z",
                  author: "heavyset_go",
                  text: "<p>I get CoffeeScript vibes from TypeScript, and look at where CoffeScript is now.</p>",
                  children: [
                    {
                      id: 25342288,
                      created_at: "2020-12-08T05:39:21.000Z",
                      author: "sanderjd",
                      text: "<p>I don&#x27;t get this. What do you mean by coffeescript vibes? They are super different languages...</p>",
                      children: [
                        {
                          id: 25343076,
                          created_at: "2020-12-08T08:17:03.000Z",
                          author: "heavyset_go",
                          text: "<p>In that JavaScript only needs to adopt a few of its features for the benefits of welding yet another compiles-to-JS toolchain on to projects to dwindle in comparison to writing ES8+.</p>",
                          children: [
                            {
                              id: 25343529,
                              created_at: "2020-12-08T09:49:14.000Z",
                              author: "z3t4",
                              text: "<p>Adding optional type annotations to JS would be interesting. It might help with VM optimization.</p>",
                              children: [
                                {
                                  id: 25350587,
                                  created_at: "2020-12-08T20:02:25.000Z",
                                  author: "heavyset_go",
                                  text: "<p>Python already does type annotations, and I have no use for Mypy other than using it for type checking in my editors via LSP. I don&#x27;t import it or use it as a dependency at all in projects.</p><p>I feel like JavaScript adopting type annotations in a similar manner will make TypeScript look the same as Mypy in many regards: nice to have, but not necessary most of the time because the parent language ships with most of its features.</p>",
                                  children: [],
                                },
                              ],
                            },
                            {
                              id: 25343327,
                              created_at: "2020-12-08T09:09:45.000Z",
                              author: "Vinnl",
                              text: "<p>The difference between CoffeeScript and TypeScript was that CoffeeScript offered syntax that people preferred, whereas TypeScript provides write-time checking of errors. It is more similar to ESLint in that regard, and is better understood as a linter than as a separate language like CoffeeScript.</p><p>Even if TS&#x27;s type annotations would be added to the language (like it practically almost has been, through Babel supporting it), you&#x27;d still want to run a tool as you write it to actually check that those annotations are adhered to, rather than having your code crash on the user when they are not. TypeScript is that tool.</p>",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 25344134,
                      created_at: "2020-12-08T11:54:52.000Z",
                      author: "azangru",
                      text: "<p>&gt; and look at where CoffeScript is now</p><p>Largely absorbed by modern javascript? ;-)</p>",
                      children: [
                        {
                          id: 25350525,
                          created_at: "2020-12-08T19:58:35.000Z",
                          author: "heavyset_go",
                          text: "<p>If you look below, this is my point. It&#x27;s inevitable for JavaScript to adopt most of TS&#x27; flagship features.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 25338708,
                  created_at: "2020-12-07T22:41:17.000Z",
                  author: "tambourine_man",
                  text: "<p>Hi there.</p>",
                  children: [],
                },
                {
                  id: 25335899,
                  created_at: "2020-12-07T19:14:01.000Z",
                  author: "DrScientist",
                  text: '<p>Because it fails to meet the &#x27;it&#x27;s the platform stupid&#x27; maxim.</p><p>ie languages aren&#x27;t nearly quite so important as the platform.</p><p>Stuff wasn&#x27;t written in js because early js was a brilliant language - it was because the platform - the web - was brilliant.</p><p>Many have written &#x27;better&#x27; languages that compile to js - <a href="https:&#x2F;&#x2F;github.com&#x2F;jashkenas&#x2F;coffeescript&#x2F;wiki&#x2F;List-of-languages-that-compile-to-JS" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;jashkenas&#x2F;coffeescript&#x2F;wiki&#x2F;List-of-langu...</a></p><p>and while typescript is one of the better, more supported ones, isn&#x27;t it just another one?</p><p>Surely in the end it just adds complexity and fragmentation of the ecosystem?</p>',
                  children: [
                    {
                      id: 25336392,
                      created_at: "2020-12-07T19:51:22.000Z",
                      author: "Ankintol",
                      text: "<p>I think many JS developers are also somewhat blind to the breadth of types of sites that are written, and so don&#x27;t understand how valuable a type system can be on the web.</p><p>Most websites are what I&#x27;d call &quot;broad and shallow&quot;. For any individual action the corresponding code path is small. Most code in these sites is easy to write and easy to debug in vanilla JS. Typescript adds boilerplate and compiler times for type safety the development team was doing fine without.</p><p>However there are some sites, usually very complex SPAs, that are necessarily &quot;deep&quot;. Even small user actions absolutely must cause &gt;10k lines of code to run. Type systems are often <i>very</i> valuable for the development of such sites.</p><p>It&#x27;s my experience that some developers who&#x27;ve only ever worked on &quot;broad and shallow&quot; sites fail to appreciate what a time saver a type system can be for the right &quot;deep&quot; website.</p>",
                      children: [
                        {
                          id: 25336423,
                          created_at: "2020-12-07T19:53:21.000Z",
                          author: "DrScientist",
                          text: "<p>I&#x27;d guess I&#x27;d have to question why you need 10K lines of code for a single web page - perhaps you need to break up your SPA?</p>",
                          children: [
                            {
                              id: 25337118,
                              created_at: "2020-12-07T20:37:32.000Z",
                              author: "SamBam",
                              text: "<p>Because applications on the web are increasingly that -- full applications.</p><p>I create scientific models and simulations for use in schools. Whether it&#x27;s simulating a hurricane, or continental drift, electronics, or molecular interactions, the simulations themselves need to run on the browser, and all the UI that provides the users with all the affordances to interact with the model needs to also be written in JS&#x2F;TS.</p><p>I think your questions are just revealing a failure of imagination&#x2F;experience for what kinds of applications run on the web these days.</p>",
                              children: [
                                {
                                  id: 25343508,
                                  created_at: "2020-12-08T09:45:44.000Z",
                                  author: "DrScientist",
                                  text: "<p>Hmm - I think that&#x27;s my point - it&#x27;s no longer the web is it - just a way to deliver traditional applications.</p><p>I can see if you want to write an Excel in the web - that you might have a complex code base - but surely that&#x27;s the exception - not the rule?</p><p>So back to the statement of &#x27;modern web = ts&#x27;</p><p>Isn&#x27;t that wrong - these applications aren&#x27;t really web - and are the exception, not the norm?</p>",
                                  children: [
                                    {
                                      id: 25346501,
                                      created_at: "2020-12-08T15:32:37.000Z",
                                      author: "SamBam",
                                      text: "<p>&gt; it&#x27;s no longer the web is it - just a way to deliver traditional applications</p><p>This statement is meaningless to me. What makes it &quot;no longer the web?&quot;</p><p>&quot;The web&quot; now includes fully-fledged applications. It&#x27;s fine to make a distinction between things that are full applications and things that are close to blogs, if you like, but it doesn&#x27;t change the fact that many people develop full applications for the web.</p><p>And I think this is clearly a lot more common you are recognizing.</p>",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: 25337438,
                              created_at: "2020-12-07T20:59:59.000Z",
                              author: "Ankintol",
                              text: "<p>The fact you ask this question gets at my point I think.</p><p>For several years I&#x27;ve been writing a large computer algebra system(CAS) that runs on a webpage. Every time the user puts some input into a text box the CAS runs. Depending on the input it may run as many as ~40k lines of code. There are no coherent lines upon which to split the CAS as far as anyone developing it can tell.</p><p>The CAS must run on the browser both to deliver on real time performance requirements and to keep server costs manageable (certain inputs will get even high end CPUs humming).</p><p>If breaking this SPA up is possible, it&#x27;s not apparent even to engineers with &gt;10 years of experience developing highly complex applications.</p><p>Other similarly complex applications run on the web, even if it&#x27;s unusual.</p>",
                              children: [
                                {
                                  id: 25340182,
                                  created_at: "2020-12-08T01:04:27.000Z",
                                  author: "z3t4",
                                  text: "<p>The trick is to <i>not</i> break it up. Adding more lose ends will just make the ball of twine more complicated. What you can break out though is independent code that is the same for many apps, that code can be made into a module and reused across apps. Pure mathematical functions can be turned into a library.</p><p>But what could probably help keep your sanity for a CAS is to add a test case for every change  to make sure the same input produce the same output in the future. As well as performance tests to avoid performance regressions.</p>",
                                  children: [
                                    {
                                      id: 25341795,
                                      created_at: "2020-12-08T04:28:33.000Z",
                                      author: "Ankintol",
                                      text: "<p>I totally agree, we do all of these things. It was just a little less clear early on in the project what the best structure for the project was :)</p>",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: 25336777,
                              created_at: "2020-12-07T20:14:29.000Z",
                              author: "jefftk",
                              text: "<p>Do you think the Zoom web client should have fewer than 10k lines?  Or be broken up?  What about Google Docs?</p>",
                              children: [
                                {
                                  id: 25343526,
                                  created_at: "2020-12-08T09:48:55.000Z",
                                  author: "DrScientist",
                                  text: "<p>Aren&#x27;t those the exception and not the rule.</p><p>Hence the statement modern web = ts is wrong.</p><p>Personally I used the zoom native client and not the web one.</p><p>I spend most of my time in offline office and not the web version</p>",
                                  children: [
                                    {
                                      id: 25346524,
                                      created_at: "2020-12-08T15:33:38.000Z",
                                      author: "jefftk",
                                      text: '<p><i>&gt; I used the zoom native client and not the web one</i></p><p>You might want to reconsider that; they have a pretty bad security track record: <a href="https:&#x2F;&#x2F;www.securemac.com&#x2F;news&#x2F;zoom-security-flaw-puts-you-at-risk-even-after-you-uninstall" rel="nofollow">https:&#x2F;&#x2F;www.securemac.com&#x2F;news&#x2F;zoom-security-flaw-puts-you-a...</a>  <a href="https:&#x2F;&#x2F;talosintelligence.com&#x2F;vulnerability_reports&#x2F;TALOS-2020-1055" rel="nofollow">https:&#x2F;&#x2F;talosintelligence.com&#x2F;vulnerability_reports&#x2F;TALOS-20...</a> <a href="https:&#x2F;&#x2F;talosintelligence.com&#x2F;vulnerability_reports&#x2F;TALOS-2020-1056" rel="nofollow">https:&#x2F;&#x2F;talosintelligence.com&#x2F;vulnerability_reports&#x2F;TALOS-20...</a> <a href="https:&#x2F;&#x2F;blog.0patch.com&#x2F;2020&#x2F;07&#x2F;remote-code-execution-vulnerability-in.html" rel="nofollow">https:&#x2F;&#x2F;blog.0patch.com&#x2F;2020&#x2F;07&#x2F;remote-code-execution-vulner...</a></p>',
                                      children: [
                                        {
                                          id: 25505403,
                                          created_at:
                                            "2020-12-22T11:56:12.000Z",
                                          author: "DrScientist",
                                          text: "<p>I don&#x27;t run windows 7 - so the zero day issue wouldn&#x27;t have been a problem.</p><p>That&#x27;s like saying don&#x27;t use the web version cos your out of date browser can be exploited.</p>",
                                          children: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 25336950,
                          created_at: "2020-12-07T20:25:28.000Z",
                          author: "LoathsLights",
                          text: "<p>In before someone comments: &quot;But chances are you are not the person who needs something as complicated as TS therefore it&#x27;s useless.&quot; and &quot;If your code is more than a thousand lines then you&#x27;re doing it wrong, all code should be &lt;1000 lines that you throw out immediately and replace with new code&quot;.</p>",
                          children: [],
                        },
                      ],
                    },
                    {
                      id: 25336140,
                      created_at: "2020-12-07T19:34:07.000Z",
                      author: "rictic",
                      text: "<p>Unlike other languages, typescript adds zero runtime overhead, and the APIs that one writes in TS are trivially consumable from JS. Consuming JS from TS is also made as easy as possible, including the option to set types aside entirely for some parts of your code using the &quot;any&quot; type, which means &quot;don&#x27;t type check this, just trust me that it works&quot;.</p><p>TS really is different from other compile-to-js languages in this respect.</p>",
                      children: [
                        {
                          id: 25336367,
                          created_at: "2020-12-07T19:49:56.000Z",
                          author: "DrScientist",
                          text: "<p>As I said, it&#x27;s not a bad attempt, and it&#x27;s presence has probably given renewed impetus to js lang improvements.</p><p>Though the attempts at close compatibility mean it&#x27;s not properly type safe despite it&#x27;s name.</p><p>In the end, it&#x27;s still a &#x27;splitter&#x27; to quote Monty Python.</p>",
                          children: [
                            {
                              id: 25337269,
                              created_at: "2020-12-07T20:47:18.000Z",
                              author: "rictic",
                              text: "<p>&gt; Though the attempts at close compatibility mean it&#x27;s not properly type safe despite its name.</p><p>Every type checked language I&#x27;ve used, from Haskell to Java to Idris to C++ to Rust has ways to override the type checker (and either do the type checking at runtime, or, as C++ is often want to do, just YOLO it). It&#x27;s not just the language but the codebase and the norms it and its dependencies use.</p><p>Some TypeScript codebases, the types are usually accurate, but not enough to rely on them, so you still need to do runtime checks in many places. In others, if something says (string|null) then you know with confidence that it is either a string or the null value, nothing more and nothing less.</p>",
                              children: [],
                            },
                          ],
                        },
                        {
                          id: 25336204,
                          created_at: "2020-12-07T19:38:29.000Z",
                          author: "vorpalhex",
                          text: "<p>It adds in developer overhead and for someone writing in JS that is often what you are trying to minimize.</p>",
                          children: [
                            {
                              id: 25341960,
                              created_at: "2020-12-08T04:47:36.000Z",
                              author: "throw_m239339",
                              text: '<p>&gt; It adds in developer overhead and for someone writing in JS that is often what you are trying to minimize.</p><p>Typescript compiler supports (some) JS DOC</p><p><a href="https:&#x2F;&#x2F;www.typescriptlang.org&#x2F;docs&#x2F;handbook&#x2F;jsdoc-supported-types.html" rel="nofollow">https:&#x2F;&#x2F;www.typescriptlang.org&#x2F;docs&#x2F;handbook&#x2F;jsdoc-supported...</a></p><p>So you can use the compiler as a static analysis tool without buying into the language itself completely, which I do and just stick type definitions to comments when needed.</p>',
                              children: [],
                            },
                            {
                              id: 25337120,
                              created_at: "2020-12-07T20:37:37.000Z",
                              author: "the_af",
                              text: "<p>Doesn&#x27;t plain JS add developer overhead in the form of bugs and code the team doesn&#x27;t understand a few weeks or months later?</p>",
                              children: [],
                            },
                            {
                              id: 25338524,
                              created_at: "2020-12-07T22:23:55.000Z",
                              author: "com2kid",
                              text: "<p>It adds overhead on initial write, saves massive overhead every day after that.</p><p>There is JS code I deal with once a month where the manipulation of types is so complex I probably burn ~30 minutes every time I have to touch it. If that was was transformed into TS (which is going to happen eventually) that&#x27;d be 30 minutes saved per month, on this one particular flow of data.</p><p>I&#x27;ve done refactorings that were only possible because TS existed.</p><p>A lot of JS unit tests consist of &quot;ensure these fields exist on this object after it has been called by these functions.&quot;</p><p>Typescript removes the need for those tests.</p><p>And it removes the need to update those tests every time the code changes (just change the declarations appropriately!). And it removes the need to run those tests on every commit.</p><p>That said, the overall code&#x2F;compile&#x2F;run time savings is possibly not in TS&#x27;s favor due to how slow the compiler is. :&#x2F;</p>",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 25339561,
                      created_at: "2020-12-08T00:05:07.000Z",
                      author: "eyelidlessness",
                      text: "<p>Hardly just another one, and hardly fragmenting. It’s absorbed the vast majority of effort previously dedicated to Flow (the fragment in its own target space), and has continually gained in the JS community proper. It’s not just (or intended to be) a “compile to JS” language, it’s (almost) just annotated JS where the annotations provide additional tooling value.</p><p>The resistance in the JS community isn’t to “yet another language”, it’s to the perceived complexity of TS strictness&#x2F;appeasing the compiler. I’m saying this not based on polling so obviously take it with a grain of salt, but I routinely search Twitter, GitHub and rando blogs for TS content and that sentiment represents nearly 100% of the anti-TS content I encounter.</p><p>And largely I find that in React-focused communities. Which having spent the last several years using TS on Node in production, and the last couple months working on a web project in React, it’s not remotely surprising. React and many libraries built on it have <i>ridiculously</i> complex types. That’s not <i>because</i> of TS but interacting with and satisfying those types at compile time is extremely frustrating even to me as a seasoned TS dev who has built libraries that take advantage of many advanced features in the type system (I just don’t expose that complexity to the API consumer).</p>",
                      children: [
                        {
                          id: 25340898,
                          created_at: "2020-12-08T02:25:39.000Z",
                          author: "pault",
                          text: "<p>Front end library type definitions are a nightmare because they are usually retrofitted onto code that uses JavaScript idioms that take heavy advantage of metaprogramming and it&#x27;s dynamic nature. It&#x27;s also compounded (in my opinion) by developers that insist on making everything inferable instead of just putting a few generic parameters here and there and saving an enormous amount of complexities. Native typescript libraries are generally extremely easy to work with, however.</p>",
                          children: [],
                        },
                      ],
                    },
                    {
                      id: 25336268,
                      created_at: "2020-12-07T19:42:51.000Z",
                      author: "hn_throwaway_99",
                      text: "<p>&gt; Surely in the end it just adds complexity and fragmentation of the ecosystem?</p><p>Lol. I switched to TS from pure JS a couple years ago and could never imagine going back. I am <i>so</i> much more productive in TS than JS:</p><p>1. Typeahead is crucial, and even when just working on my own projects it makes me much faster.</p><p>2. Refactoring is a scary nightmare in pure JS, but so much easier with TS.</p><p>3. I have yet to see any sizable, multi-person pure JS project <i>not</i> become an incomprehensible nightmare after a couple years. TS makes large codebases much easier to maintain.</p><p>There are other reasons.</p><p>If anything, the consolidation onto TS from previous competing type systems for JS (e.g. I think Flow is dead for all intents and purposes, and I&#x27;ve seen a number of projects migrate onto TS from Flow) results in less fragmentation.</p>",
                      children: [
                        {
                          id: 25336711,
                          created_at: "2020-12-07T20:11:22.000Z",
                          author: "z3t4",
                          text: "<p>What text editor did you use before? I think the biggest advantage is an IDE, not the language itself.</p>",
                          children: [
                            {
                              id: 25337340,
                              created_at: "2020-12-07T20:52:39.000Z",
                              author: "RussianCow",
                              text: "<p>As a daily user of IntelliJ IDEA—which, IME, has the best autocomplete and code suggestions of any IDE for dynamically typed languages—there is a <i>world</i> of a difference between the quality of suggestions for a codebase using TypeScript and one written in vanilla JS. Without concrete types, the IDE often has to guess the possible type(s) that a value can have, whereas with TS, there is (generally) no such ambiguity.</p>",
                              children: [
                                {
                                  id: 25337610,
                                  created_at: "2020-12-07T21:12:18.000Z",
                                  author: "scpedicini",
                                  text: "<p>I don&#x27;t really experience this issue and I use Web storm which is basically the same thing. I find that the dynamic type hinting plus the combination of using JS Doc formatted comments rarely leaves me with any ambiguity when writing vanilla JavaScript.</p>",
                                  children: [
                                    {
                                      id: 25339086,
                                      created_at: "2020-12-07T23:16:53.000Z",
                                      author: "raytracer",
                                      text: "<p>Are you using types in your JS Doc comments? If so, that&#x27;s not vanilla JavaScript.</p>",
                                      children: [
                                        {
                                          id: 25343542,
                                          created_at:
                                            "2020-12-08T09:51:33.000Z",
                                          author: "DrScientist",
                                          text: "<p>It is because it runs in the browser unprocessed.</p><p>You edit a file and reload, no munging pipeline,</p>",
                                          children: [],
                                        },
                                        {
                                          id: 25339845,
                                          created_at:
                                            "2020-12-08T00:34:08.000Z",
                                          author: "z3t4",
                                          text: "<p>JS Doc is just comments. (But the typechecker can still read them.)</p>",
                                          children: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 25336461,
                          created_at: "2020-12-07T19:55:42.000Z",
                          author: "DrScientist",
                          text: "<p>I understand the power of types - I just wonder why the heck you are writing so much JS&#x2F;TS code?</p><p>Are you doing server stuff with it?</p><p>You could argue here there are much better languages and platforms for that.</p>",
                          children: [
                            {
                              id: 25340462,
                              created_at: "2020-12-08T01:31:35.000Z",
                              author: "hn_throwaway_99",
                              text: "<p>Yes, in my current tech stack our entire backend is in Node with TypeScript, and the front end is React with TypeScript.</p><p>&gt; You could argue here there are much better languages and platforms for that.</p><p>You could, but I think you&#x27;d be wrong. I come from a background of using Java on the backend for over a decade, then some time with various backend languages including Python and Ruby. This is the first time in my career when everything (front end and back end) are essentially on the same stack, and there are huge, gigantic productivity improvements to that. Most of it stems from it being easy for developers to switch between front end and back end code. E.g. it&#x27;s very easy for front end developers to dig in and debug something that&#x27;s not right on the back end, and usually to fix it themselves. Same thing goes for backend devs investigating how APIs are used by the front end. In all my previous jobs it was relatively rare (certainly not never but not that common) for devs to cross that divide, mainly because setting up the environment in a totally different stack was time consuming and annoying, and mentally context switching into a different language was difficult, if all you wanted to do was dig in on one particular endpoint, for example.</p><p>But even discounting that, I am much more productive in TS than I ever was with Java, primarily because the structural typing of TS makes thing much easier to refactor compared to the nominal typing of Java. Sure, there are some cases (mainly WRT scalability) where Java may be a better choice, but the idea that TS&#x2F;Node is not an awesome choice for the server is outdated IMO.</p>",
                              children: [
                                {
                                  id: 25343738,
                                  created_at: "2020-12-08T10:42:03.000Z",
                                  author: "feu",
                                  text: "<p>&gt;primarily because the structural typing of TS makes thing much easier to refactor compared to the nominal typing of Java.</p><p>That&#x27;s interesting. This year I switched from server-side Java to server-side TS and I find that refactoring is incredibly painful when compared to Java. I think any productivity gains in the greenfield portion of a TS project are quickly offset by the pain of refactoring and debugging during maintenance. It&#x27;s really disappointing, as I quite like TS.</p>",
                                  children: [
                                    {
                                      id: 25348202,
                                      created_at: "2020-12-08T17:14:48.000Z",
                                      author: "hn_throwaway_99",
                                      text: "<p>I&#x27;m curious, could you give an example where refactoring is more difficult? I find TS much more easy to refactor because since the structural typing basically just says, for example, &quot;This method argument needs to have these properties of these types&quot;, if I find out &quot;Uh oh, this method actually needs one more piece of data&quot;, in Java I&#x27;d have to change the definition of the type that was passed in which could have lots more unintended side-effects, while in TS I can essentially &quot;localize&quot; my changes just to wherever I call that method.</p><p>The &quot;blast radius&quot; if you will with nominal type systems is just always much larger.</p>",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: 25336544,
                              created_at: "2020-12-07T20:01:40.000Z",
                              author: "halfmatthalfcat",
                              text: "<p>Have you seen the size of frontend codebases? Even modest SPAs reach into the tens of thousands of lines. Or the size of large Express.js driven backends? A huge portion of the web is driven by JS&#x2F;TS.</p>",
                              children: [
                                {
                                  id: 25336838,
                                  created_at: "2020-12-07T20:18:38.000Z",
                                  author: "at-fates-hands",
                                  text: "<p>&gt;&gt; Even modest SPAs reach into the tens of thousands of lines.</p><p>I still don&#x27;t get how we got from fifty lines of code for a form with simple client side validation to a React&#x2F;Vue&#x2F;Angular&#x2F;Next version that needs 100 different modules and a thousand lines of code to replicate. Why do people see this as a huge advancement in front-end development?</p>",
                                  children: [
                                    {
                                      id: 25336992,
                                      created_at: "2020-12-07T20:28:54.000Z",
                                      author: "halfmatthalfcat",
                                      text: "<p>Those libraries are providing a lot more than just simple validation though. Bunch of advanced validation rules, masking, etc. I&#x27;m sure if you dive into any of those modules you&#x27;d be able to see why. Not saying there isn&#x27;t dependency bloat but it&#x27;s not like people are creating these for the sake of it.</p>",
                                      children: [],
                                    },
                                    {
                                      id: 25336998,
                                      created_at: "2020-12-07T20:29:38.000Z",
                                      author: "jrockway",
                                      text: "<p>Because people are writing applications, not forms.  As software engineering has gotten easier, customers have demanded more complicated applications.</p><p>Modest SPAs do have a lot of code.  So does a C++ Win32 application that calls into some central datastore.  The complexity is not a byproduct of languages or libraries, but rather the customer&#x27;s complicated needs.</p>",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: 25339128,
                              created_at: "2020-12-07T23:20:13.000Z",
                              author: "uryga",
                              text: "<p>have you worked with GUIs much? complex interactive UIs take a surprising amount of code, doubly so if what you&#x27;re doing isn&#x27;t covered well by your platform&#x2F;toolkit&#x27;s native inputs.</p><p>i&#x27;m working on a webapp with a scheduling thing and even drawing a nice-but-not-interactive day schedule is a bunch of work. consider a day view that lays out overlapping events next to each other:</p><p><pre><code>   Dec 8\n  -----------\n   9\n  10  AAA\n  11  AAA BBB\n  12  AAA BBB\n  13      BBB\n  14  CCC BBB\n  15  CCC\n  16  \n  17  DDDDDDD\n  18  DDDDDDD\n  19\n</code></pre>\nlike, even laying out those boxes takes a <i>bunch</i> of code. and then you need interactivity, the actual &quot;app&quot; part - you want drag-n-drop that snaps to columns and switches you to another day if you drag it to the side, and selections, and menus, and hovery-popupy things, and undo, and so on... it adds up quickly</p>",
                              children: [
                                {
                                  id: 25343535,
                                  created_at: "2020-12-08T09:50:05.000Z",
                                  author: "DrScientist",
                                  text: "<p>But you can split it with with web components and es6 modules to be sane without resorting to a pre-processor so you code won&#x27;t run directly on the platform.</p>",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 25336175,
                  created_at: "2020-12-07T19:36:31.000Z",
                  author: "auganov",
                  text: "<p>Pretty annoyed with Typescript too. Mostly because of its popularity.</p><p>Before Typescript most compile-to-js languages existed in their own world. You might have not liked them. But you&#x27;d never have to deal with them.</p><p>Typescript has become so popular that many top javascript libraries use it too. Whatever you think of it, sooner or later you&#x27;ll be working with Typescript code.</p>",
                  children: [
                    {
                      id: 25337160,
                      created_at: "2020-12-07T20:39:28.000Z",
                      author: "DenverCode",
                      text: "<p>You mean you didn&#x27;t love Coffeescript?</p><p>(I&#x27;m joking)</p>",
                      children: [],
                    },
                    {
                      id: 25343064,
                      created_at: "2020-12-08T08:14:23.000Z",
                      author: "Existenceblinks",
                      text: "<p>Related. I&#x27;m dealing a lib that says Typescript is optional, but we give you lots of boilerplate if you don&#x27;t use it.</p>",
                      children: [],
                    },
                    {
                      id: 25336214,
                      created_at: "2020-12-07T19:39:01.000Z",
                      author: "sundarurfriend",
                      text: "<p>This is pretty much how I feel about Javascript itself.</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 25336190,
                  created_at: "2020-12-07T19:37:34.000Z",
                  author: "vorpalhex",
                  text: "<p>It&#x27;s terrible. The amazing issues that TS can introduce to a codebase are terrifying, and TS has breaking releases on a regular cadence. As someone who has to do maintenance on a legacy TS platform it was miserable and literally involved flipping through TS versions to find one that worked.</p><p>My issues are not with strongly typed languages, they&#x27;re specifically with TS.</p>",
                  children: [
                    {
                      id: 25338233,
                      created_at: "2020-12-07T22:02:04.000Z",
                      author: "names_are_hard",
                      text: "<p>What issues does TS introduce into a codebase that weren&#x27;t already there? This sounds kinda like arguing that if we write fewer tests we&#x27;ll have fewer bugs.</p>",
                      children: [
                        {
                          id: 25341043,
                          created_at: "2020-12-08T02:45:42.000Z",
                          author: "fogetti",
                          text: "<p>In our case: 1) slow and long transpilation times, 2) although not that common these days but missing typings used to cause some head scratch 3) overly permissive&#x2F;overly restrictive type definitions 4) wrongly configured sourcemaps 5) unreadable type definitions&#x2F;declarations... The list is long but these are off the top of my head</p>",
                          children: [],
                        },
                        {
                          id: 25339880,
                          created_at: "2020-12-08T00:37:05.000Z",
                          author: "moron4hire",
                          text: "<p>Getting a configuration together that consumes all your dependencies and generates code without crapping a ton of meaningless warnings about duplicate type definitions in its own type mappings for runtime types is non-trivial and requires setting more than a few non-default compiler options, none of which are named anything that means anything.</p><p>I still don&#x27;t know how it&#x27;s possible to safely, cleanly make a library that other projects can consume comfortably with just TypeScript.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 25373589,
                  created_at: "2020-12-10T13:43:45.000Z",
                  author: "jedimastert",
                  text: "<p>I&#x27;m not against the idea of typescript as I&#x27;d just rather not have a compile step.</p>",
                  children: [],
                },
                {
                  id: 25336537,
                  created_at: "2020-12-07T20:00:41.000Z",
                  author: "_greim_",
                  text: "<p>I&#x27;ve been thinking a lot about why this is, and I think one reason is because TS adds mental overhead to the language, while simultaneously removing other mental overhead.</p><p>However, for JS programmers, worrying about types is habitual. Offloading that task to a robot is great, but it doesn&#x27;t mean the habit will just disappear. Thus to them, TS seems to mainly add overhead.</p>",
                  children: [
                    {
                      id: 25340350,
                      created_at: "2020-12-08T01:21:13.000Z",
                      author: "letitbeirie",
                      text: "<p>&gt; for JS programmers, worrying about types is habitual</p><p>Couldn&#x27;t the same be said for COBOL programmes and GOTOs?</p>",
                      children: [
                        {
                          id: 25350174,
                          created_at: "2020-12-08T19:31:55.000Z",
                          author: "_greim_",
                          text: "<p>Yeah I guess I&#x27;d generalize it as programming having two kinds of learning. First is memorization of syntax and semantics of the language. Second is a kind of shadow learning, or &quot;street smarts&quot; for survival in the language; which parts of town to avoid and which paths avoid dark alleys, etc. These habits are hard to quantify, and beginner programmers especially tend to apply the &quot;street smarts&quot; from their first language to every future language, which creates problems.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 25340158,
                  created_at: "2020-12-08T01:01:50.000Z",
                  author: "tenaciousDaniel",
                  text: "<p>I&#x27;ve spent enough time converting nearly illegible coffee script back to JS that I didn&#x27;t want to do it again. I believe TS has its has benefits, I just don&#x27;t care.</p>",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 25334219,
          created_at: "2020-12-07T17:16:22.000Z",
          author: "robofanatic",
          text: "<p>Excellent. Wish all documentation\\tutorial sites were this clean.</p>",
          children: [
            {
              id: 25335209,
              created_at: "2020-12-07T18:23:16.000Z",
              author: "kaycebasques",
              text: "<p>When you say &quot;clean&quot; are you referring to the formatting of the page?</p>",
              children: [
                {
                  id: 25344070,
                  created_at: "2020-12-08T11:43:19.000Z",
                  author: "madeofpalk",
                  text: "<p>Not sure what OP was referring to, but I find both the formatting and the tone of voice to be exceptionally clean and mature.  I am incredibly jealous of the writer&#x27;s skill to write like this.</p>",
                  children: [],
                },
                {
                  id: 25336197,
                  created_at: "2020-12-07T19:38:00.000Z",
                  author: "realyashnag",
                  text: "<p>and structuring of the content, i believe.</p>",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 25344974,
          created_at: "2020-12-08T13:49:31.000Z",
          author: "MaxBarraclough",
          text: "<p>Looks well written, but it seems undecided on whether it&#x27;s targeting experienced programmers or newcomers. I have to disagree with priyatham_&#x27;s position that it effectively targets both.</p><p>The <i>Loops</i> section gives a very brief description of what loops are. This doesn&#x27;t introduce anything of value to an experienced programmer, and it&#x27;s nowhere near enough of an explanation for teaching imperative programming to a beginner.</p><p>Personally I&#x27;d suggest targeting experienced programmers. I only learnt JavaScript relatively recently, and I found it very frustrating that every JavaScript tutorial I could find was aimed at beginners (and that isn&#x27;t an exaggeration).</p>",
          children: [],
        },
        {
          id: 25341904,
          created_at: "2020-12-08T04:41:53.000Z",
          author: "vmurthy",
          text: '<p>Lot of upvotes for the site so please do support the author(s) by buying the book[0].</p><p>All parts together is $18 (epub + pdf). I am not a front-end developer so not much use for me personally but spreading the good word :)</p><p><a href="https:&#x2F;&#x2F;javascript.info&#x2F;ebook" rel="nofollow">https:&#x2F;&#x2F;javascript.info&#x2F;ebook</a></p>',
          children: [],
        },
        {
          id: 25335272,
          created_at: "2020-12-07T18:26:53.000Z",
          author: "emmanueloga_",
          text: "<p>Looks really nice, although ...</p><p>For as good as the TOC and layout is, there&#x27;s always something I miss when I read books from a website. I miss the spatial context: how much material I already covered? How much is left?</p><p>I like the linearity of regular books (that includes PDFs). If the book is a website the next best thing for me is when the whole thing is just a single page. Worst thing are epubs :-p (hate the way the layout works with those and how slow epub readers tend to be).</p><p>ps. I saw I can buy a PDF of this site, but just commenting in general.</p>",
          children: [
            {
              id: 25335516,
              created_at: "2020-12-07T18:45:57.000Z",
              author: "joshxyz",
              text: "<p>I think comparing gaps with exploringjs.com (separated by ecmascript versions) would be worth a shot.</p>",
              children: [],
            },
          ],
        },
        {
          id: 25338606,
          created_at: "2020-12-07T22:31:41.000Z",
          author: "dmje",
          text: "<p>Never rely on Americans to spot irony</p>",
          children: [],
        },
        {
          id: 25335538,
          created_at: "2020-12-07T18:47:55.000Z",
          author: "29athrowaway",
          text: "<p>It is a nice tour of JS features.</p><p>Some things missing: Typed arrays, template literals, Internationalization API (Intl).</p><p>Date will be replaced  with TC39 Temporal soon.</p>",
          children: [],
        },
        {
          id: 25337330,
          created_at: "2020-12-07T20:51:47.000Z",
          author: "sireat",
          text: "<p>Still fantastic!</p><p>When I teach Javascript to students, javascript.info is one of the main sources I use besides MDN.</p><p>PS My copy of JS the good parts is getting a bit dusty somewhere in the garage...</p>",
          children: [],
        },
        {
          id: 25336566,
          created_at: "2020-12-07T20:03:07.000Z",
          author: "throwawaysea",
          text: "<p>Is there a good tutorial that covers all the various frameworks that are in use? Modern Javascript has become very complicated due to the proliferation of these frameworks more so than the programming language.</p>",
          children: [
            {
              id: 25337151,
              created_at: "2020-12-07T20:39:05.000Z",
              author: "icebr9",
              text: "<p>Tbh if you know JavaScript well all these frameworks work like js. I build couple websites using vanilla js and when using any framework I can tell what it is doing behind the curtains because I have done it myself dozen or times in multiple lines of normal js</p>",
              children: [],
            },
          ],
        },
        {
          id: 27169795,
          created_at: "2021-05-15T23:12:42.000Z",
          author: "wdb",
          text: "<p>Great resource! Somehow I totally missed the existence of `for await...of`</p>",
          children: [],
        },
        {
          id: 27166982,
          created_at: "2021-05-15T17:11:27.000Z",
          author: "flowerlad",
          text: '<p>10 years ago JavaScript was an ugly language, with its clunky prototypal inheritance and so on. Modern JavaScript is a beautiful language, however, especially when enhanced with static typing as in TypeScript. So much so, that Stanford has replaced Java with JavaScript for its introductory programming course [1].</p><p>[1] <a href="https:&#x2F;&#x2F;web.stanford.edu&#x2F;class&#x2F;cs106j&#x2F;handouts&#x2F;01-GeneralInformation.pdf" rel="nofollow">https:&#x2F;&#x2F;web.stanford.edu&#x2F;class&#x2F;cs106j&#x2F;handouts&#x2F;01-GeneralInf...</a></p>',
          children: [
            {
              id: 27167024,
              created_at: "2021-05-15T17:17:11.000Z",
              author: "BenjiWiebe",
              text: "<p>I feel that being nicer than Java is a pretty low bar.</p>",
              children: [
                {
                  id: 27167212,
                  created_at: "2021-05-15T17:35:24.000Z",
                  author: "qsort",
                  text: "<p>Which version? I feel like Java &gt;=11 is absolutely fine, but if you&#x27;re talking about earlier versions you have a point.</p>",
                  children: [
                    {
                      id: 27167481,
                      created_at: "2021-05-15T18:07:39.000Z",
                      author: "lanstin",
                      text: "<p>Someone brought up “while we do this move to EKS maybe it would be a good time to port from Java 8” and the whole room (virtual) groaned.</p>",
                      children: [
                        {
                          id: 27170943,
                          created_at: "2021-05-16T03:25:32.000Z",
                          author: "derptron",
                          text: "<p>any reason in particular that people think that&#x27;s hard?</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 27167026,
              created_at: "2021-05-15T17:17:14.000Z",
              author: "xhkkffbf",
              text: "<p>A number of schools like Dartmouth did this more than 15 years ago.</p>",
              children: [],
            },
            {
              id: 27167056,
              created_at: "2021-05-15T17:20:26.000Z",
              author: "criddell",
              text: "<p>Picking a language to teach programming and concepts in computer science presents an interesting conundrum. Do you pick a commercially relevant language (which most students want) or go with one that might be better for academic purposes? I probably lean mostly towards the former because time spent learning something like Eiffel feels somewhat wasted.</p>",
              children: [
                {
                  id: 27167269,
                  created_at: "2021-05-15T17:42:28.000Z",
                  author: "dehrmann",
                  text: "<p>To me, the dilemma is between a language that&#x27;s easy to learn and one that is useful once you learn the language. Most languages have too many warts and footguns to be easy to learn, but learning a toy language isn&#x27;t good, either, because it&#x27;s not useful.</p>",
                  children: [],
                },
                {
                  id: 27168066,
                  created_at: "2021-05-15T19:21:28.000Z",
                  author: "klibertp",
                  text: "<p>No! Eiffel should be the default OOP language for any kind of course. Being forced to think about pre- and postcoditions and invariants <i>by the language</i> is a really good thing for beginner programmers. While the syntax is somewhat verbose (mainly because of using keywords instead of most punctuation) Not teaching about Design by Contract is yet another billion dollar mistake in computer science. There are DbC libraries or frameworks for just about any language, but only very few programmers know about its existence, which leads to criminal underutilisation of the technique in the industry.</p><p>I can&#x27;t be sure, but I think there&#x27;s a lot of thought, at least, behind selecting a particular language for an introductory course on programming. I don&#x27;t know which language I would choose, but I&#x27;d like something that would broaden the horizons of student as much as possible. It could be Mozart&#x2F;Oz or something similar.</p>",
                  children: [
                    {
                      id: 27170085,
                      created_at: "2021-05-16T00:05:00.000Z",
                      author: "yesenadam",
                      text: '<p>I didn&#x27;t know anything about Eiffel or DbC, just reading about them now.</p><p>&quot;Eiffel Software applied for trademark registration for Design by Contract in December 2003, and it was granted in December 2004.&quot; <a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Design_by_contract" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Design_by_contract</a></p><p>Is that possibly something to do with it not commonly being taught about&#x2F;learnt?</p>',
                      children: [
                        {
                          id: 27175944,
                          created_at: "2021-05-16T18:39:47.000Z",
                          author: "klibertp",
                          text: "<p>I have no idea, unfortunately. On the other hand, the trademark doesn&#x27;t seem to be a problem to guys behind Racket, which has the most advanced contracts system out there; the canonical book for programming classes in Racket, &quot;How to Design Programs&quot;, teaches you everything you need to know about DbC without ever mentioning the term itself, IIRC. Even if you don&#x27;t want to touch Eiffel due to it being proprietary, there are many languages which support DbC you can choose from: already mentioned Racket, Ada, Clojure, Scala, D, Nim, Haxe, Elixir, and many more.</p><p>Also, there&#x27;s a difference between DbC and simply using contracts - it&#x27;s similar to the difference between writing tests and doing TDD. Many people might not be convinced that the benefits of DbC are worth rethinking the development process, and so they dismiss all contracts as &quot;too many asserts, don&#x27;t need&quot;. But, like with tests, you can benefit from a solid test suite even if you don&#x27;t do TDD; similarly, you can reap a lot of benefits from simply ensuring that precondition violations are caught at the boundary of a subroutine, because it makes it easier to find the reason beind the problem.</p><p>I&#x27;m convinced that in the next 10-15 years we will see gradual typing (with type inference) embracing contracts as a way to extend the guarantees from compile time to runtime. Maybe we will finally get the best of all worlds: rapid prototyping, great performance, and verifiable program correctness.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 27167183,
                  created_at: "2021-05-15T17:32:31.000Z",
                  author: "qsort",
                  text: "<p>On the other hand, there are concepts (closures, objects, pointers) that come more naturally with some languages, and you absolutely need to learn the concepts even if you don&#x27;t end up using the language.</p><p>Don&#x27;t pick one, pick a healthy mix.</p>",
                  children: [],
                },
                {
                  id: 27167470,
                  created_at: "2021-05-15T18:06:23.000Z",
                  author: "lanstin",
                  text: "<p>No one should have a computer science degree and not know multiple languages and multiple programming paradigms. Prolog, lisp or scheme, C, JavaScript, Haskell. The long term task of the professional software developer is to learn new stuff. Helps if your awareness of the cool things you could learn is already broad. I cannot explain how wrong it is to graduate with Java only and think that is sufficient. To be honest, I would also want people to understand the halting problem and Godel’s incompleteness theorem’s proof, as understanding the equivalence of apparent different systems that can handle the integers is very fundamental. And these days some knowledge of distributed theory is also good, the Lamport time clocks paper and so on. Unless the student is ambitious and doesn’t really like programming and just wants to program for a few years and then get into management or something like that (product? bizdev? I’d that a thing?) they will go thru many iterations of interesting new technologies. The brain that enjoys learning mind-bending shit will have a broader conceptual base and a better chance to see how lisp macro type things can help with k8s configs.</p><p>Or while lazy argument evaluation might not be in your language, having it in your tool box for message processing design or you know evaluation of user preference rule sets against an event might be helpful.</p>",
                  children: [],
                },
              ],
            },
            {
              id: 27169199,
              created_at: "2021-05-15T21:28:41.000Z",
              author: "geuis",
              text: "<p>Javascript is still based on prototypal inheritance. The newer class syntax is just a wrapper.</p>",
              children: [
                {
                  id: 27169218,
                  created_at: "2021-05-15T21:31:58.000Z",
                  author: "dragonwriter",
                  text: "<p>&gt; Javascript is still based on prototypal inheritance.</p><p>Protoypal inheritance and class-based inheritance where classes are themselves first-class objects aren’t really all that different, anyhow.</p>",
                  children: [],
                },
              ],
            },
            {
              id: 27168435,
              created_at: "2021-05-15T19:57:52.000Z",
              author: "axguscbklp",
              text: "<p>I think that it was beautiful 10 years ago, too, if you mainly used a subset of it, relying heavily on closures and avoiding constructors and &quot;this&quot; as much as possible. I think that prototypal inheritance is elegant but in any case, there was never much reason to use any inheritance syntax to begin with other than perhaps in rare cases where one wanted to really maximize performance. As for static typing, while it has its uses, the idea that it makes things more beautiful is subjective.</p><p>Arrow functions really are a great bit of syntactic sugar. I know that they are more than that, but since I avoid &quot;this&quot; anyway, for me they may as well just be syntactic sugar. As for the &quot;class&quot; keyword, I find it to be utterly pointless but of course, tastes vary.</p>",
              children: [],
            },
            {
              id: 27167160,
              created_at: "2021-05-15T17:30:39.000Z",
              author: "ksml",
              text: "<p>Actually, the class you linked was an experimental class, and we ended up going with Python instead. (source: I was the head TA for that class)</p>",
              children: [
                {
                  id: 27167246,
                  created_at: "2021-05-15T17:39:24.000Z",
                  author: "galangalalgol",
                  text: "<p>Why a dynamically typed language to learn with?</p>",
                  children: [
                    {
                      id: 27170835,
                      created_at: "2021-05-16T02:55:55.000Z",
                      author: "valtism",
                      text: "<p>As someone who began learning with a statically typed language then moved to a dynamically typed language, I can say that I found learning a lot simpler with a dynamic language.</p><p>I see static typing as a nice tool to help stop you making errors; but when I was trying to wrap my head around how to program I found it easier to not have to fight a compiler and allow myself to make mistakes.</p>",
                      children: [],
                    },
                    {
                      id: 27167327,
                      created_at: "2021-05-15T17:49:17.000Z",
                      author: "ksml",
                      text: "<p>I think there were two main reasons: choosing a popular language (JS and python happen to be among the most popular, accessible languages) and pedagogical simplicity (it&#x27;s nice to avoid burdening beginners with extra syntax when they&#x27;re already struggling to learn other things). Some unscientific evaluation showed that students picked up static types just fine in our second programming class (which is in C++)</p><p>Personally, I think we should be teaching static types and I pushed for Typescript, but it didn&#x27;t happen.</p>",
                      children: [
                        {
                          id: 27167523,
                          created_at: "2021-05-15T18:12:20.000Z",
                          author: "cogman10",
                          text: "<p>Always an option to push for something like mypy.  That&#x27;d at least give students exposure to types (even if they don&#x27;t have to write them)</p>",
                          children: [],
                        },
                        {
                          id: 27167529,
                          created_at: "2021-05-15T18:12:41.000Z",
                          author: "jefftk",
                          text: '<p><i>&gt; I think we should be teaching static types and I pushed for Typescript</i></p><p>Another option would be to introduce Python types:</p><p><pre><code>    def square(x: int) -&gt; int:\n      return x*x\n</code></pre>\n<a href="http:&#x2F;&#x2F;mypy-lang.org&#x2F;examples.html" rel="nofollow">http:&#x2F;&#x2F;mypy-lang.org&#x2F;examples.html</a></p>',
                          children: [
                            {
                              id: 27171290,
                              created_at: "2021-05-16T04:43:07.000Z",
                              author: "benrbray",
                              text: "<p>Is there something like DefinitelyTyped for Python?  TypeScript only became useful once the ecosystem reached a critical mass of type definitions available for popular libraries.</p><p>At the moment the Python community seems pretty anti-static-types, and the core scientific libraries (numpy, matplotlib, pytorch) don&#x27;t export type signatures.  Language server &#x2F; intellisense support for type inference also has a long way to go.</p>",
                              children: [
                                {
                                  id: 27172303,
                                  created_at: "2021-05-16T09:00:34.000Z",
                                  author: "vorticalbox",
                                  text: '<p>Not that I am aware of. You can create you own types like what has happened with boto3 [1]</p><p>I would assume as types become used more a definitely typed type project will happen on pypi.</p><p>[1] <a href="https:&#x2F;&#x2F;pypi.org&#x2F;project&#x2F;boto3-type-annotations&#x2F;" rel="nofollow">https:&#x2F;&#x2F;pypi.org&#x2F;project&#x2F;boto3-type-annotations&#x2F;</a></p>',
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 27169090,
                          created_at: "2021-05-15T21:14:11.000Z",
                          author: "bruce343434",
                          text: "<p>I started programming in Lua which is dynamically typed. It allowed me to experience why a type system would be nice. I&#x27;m sure if I had started with a typed language, I would have written it off as antiquated and unnecessary.</p>",
                          children: [],
                        },
                        {
                          id: 27167697,
                          created_at: "2021-05-15T18:33:08.000Z",
                          author: "kaba0",
                          text: "<p>I am sure I’m absolutely nowhere near your knowledge and expertise, but please bear with me sharing my opinion :)</p><p>I think Java fits better as an introductory language — it is similarly popular as JS and python, and while I’m sure static typing can be picked up easily, I think fighting the compiler for a likely-correct program in the end is a better alternative than understanding why the program failed with this given input and not with another — so my not-backed-up-by-teaching opinion is that dynamic languages are not necessarily a great fit. It also features the basic OOP concepts, and modern java can showcase plenty of FP ones as well.</p><p>On the other hand, going lower level is similarly detrimental, I’ve taken a class where C was used, and that way you get cryptic runtime errors as well, while memory management is not that hard to pick up later on.</p>",
                          children: [
                            {
                              id: 27169319,
                              created_at: "2021-05-15T21:46:56.000Z",
                              author: "ASalazarMX",
                              text: "<p>&gt; I think Java fits better as an introductory language</p><p>Oh no, for a beginner just setting up the environment is a huge hurdle. Sun&#x27;s Java downloads page is utterly confusing, and the IDEs are monstrous and complex too. Past that, they have to learn about the JVM and compiling to JARs before they can even run their first program. Leave all that housekeeping to us seasoned, soul-crushed developers ;)</p><p>If we&#x27;re starting to teach compiled, boilerplate-ridden laguages to beginners, why not jump straight to C++ or Rust?</p>",
                              children: [
                                {
                                  id: 27170259,
                                  created_at: "2021-05-16T00:45:00.000Z",
                                  author: "kaba0",
                                  text: "<p>Sun’s download page?? Also, vim is more than enough for beginners and there is hardly anything hard in javac Main.java &amp;&amp; java Main. With a modern JDK java Main.java will compile and run it in one go even. Jars are absolutely not required.</p>",
                                  children: [
                                    {
                                      id: 27184553,
                                      created_at: "2021-05-17T15:28:50.000Z",
                                      author: "ASalazarMX",
                                      text: "<p>Oracle! I guess I showed my age, and that the last time I developed on Java I had to use Eclipse and I still have PTSD from it.</p>",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: 27168299,
                              created_at: "2021-05-15T19:44:11.000Z",
                              author: "bccdee",
                              text: "<p>I think wrapping all your code in OOP boilerplate is probably too much for an intro course. One of the nice things about Python is that hello world is `print(&quot;Hello world&quot;)`. No `public static void main(String[] args)`, no nothing. And then on top of that, you can <i>add</i> your functions and classes and whatnot, but it&#x27;s easier to wrap your head around a zero-fluff entry point.</p>",
                              children: [
                                {
                                  id: 27170017,
                                  created_at: "2021-05-15T23:54:21.000Z",
                                  author: "yesenadam",
                                  text: "<p>print &quot;Hello world&quot; - python 2 was&#x2F;is even nicer in that regard.</p>",
                                  children: [],
                                },
                              ],
                            },
                            {
                              id: 27167815,
                              created_at: "2021-05-15T18:47:31.000Z",
                              author: "bradlys",
                              text: "<p>Intro classes don’t need to overburden the student. The biggest hurdle for students is thinking like a computer. You start introducing all these extra things to just get going and it becomes even more difficult.</p><p>Explaining to students what public static void main means is pretty annoying and seeing cryptic syntax littered everywhere does not help students when they’re first learning.</p><p>Dynamic languages make much more sense to beginners because the idea of what a variable represents is more abstract to them than tangible to you. To them, they don’t see the value of types because they’re not going to be building large programs where that is going to matter. They know what their functions return and take in, because they probably only have one or two. Performance and compiling is also not as much of a concern, etc...</p>",
                              children: [
                                {
                                  id: 27168184,
                                  created_at: "2021-05-15T19:34:01.000Z",
                                  author: "flowerlad",
                                  text: '<p>&gt; <i>Explaining to students what public static void main means is pretty annoying and seeing cryptic syntax littered everywhere does not help students when they’re first learning.</i></p><p>C# has solved that with &quot;top level statements&quot; [1]. If Java added that then problem solved, right? It&#x27;s a simple addition.</p><p>[1] <a href="https:&#x2F;&#x2F;docs.microsoft.com&#x2F;en-us&#x2F;dotnet&#x2F;csharp&#x2F;whats-new&#x2F;csharp-9#top-level-statements" rel="nofollow">https:&#x2F;&#x2F;docs.microsoft.com&#x2F;en-us&#x2F;dotnet&#x2F;csharp&#x2F;whats-new&#x2F;csh...</a></p>',
                                  children: [
                                    {
                                      id: 27171693,
                                      created_at: "2021-05-16T06:38:47.000Z",
                                      author: "dvdkon",
                                      text: "<p>C# would be a better choice. In addition to top-level statements, the standard API seems much less &quot;dogmatically&quot; OOP. Reading a file is just one static method away. Unfortunately, it&#x27;s still not possible to have top-level functions, right?</p>",
                                      children: [
                                        {
                                          id: 27171949,
                                          created_at:
                                            "2021-05-16T07:40:25.000Z",
                                          author: "kaba0",
                                          text: "<p>But C# on the other hand is a very very complex language, with almost double the keywords compared to Java.</p>",
                                          children: [
                                            {
                                              id: 27172094,
                                              created_at:
                                                "2021-05-16T08:17:40.000Z",
                                              author: "dvdkon",
                                              text: "<p>Yes, but I think the learning curve matters more, especially for students who are going to be mostly writing code, not reading existing projects.</p>",
                                              children: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  id: 27167975,
                                  created_at: "2021-05-15T19:09:51.000Z",
                                  author: "kaba0",
                                  text: "<p>I agree with you on the overburden part, but not on the dynamic lang part. My very minimal experience is that the hardest thing to get right as a beginner (or even as an experienced developer) is to be able to follow the flow of your code (Maybe introductory courses should employ the debugger?), and the exact state it has at a given point, eg. at an exception. Restricting the valid states imo helps understanding. As well as not having to debug at all at first, but the compiler notifying what is wrong immediately.</p>",
                                  children: [
                                    {
                                      id: 27169572,
                                      created_at: "2021-05-15T22:25:49.000Z",
                                      author: "hurflmurfl",
                                      text: "<p>I think that you&#x27;re right in that it&#x27;s hard to compose all those parts of your program together without accidentally mistaking a `Query` for a `string`, or god knows what. I&#x27;m helping a friend learn web development, and most of the issues they get stuck for long time at are solved by making sure that functions you are calling are returning what you think they are.</p><p>On the other hand, I feel that most of the lessons I&#x27;ve learnt that have really stuck are the ones where I first do a thing wrong, and then find how to do it right. In a similar fashion, letting the student create a steaming pile of ... and then giving them a solution to their troubles in a later course feels like a good idea.</p><p>I personally have come a full circle: starting with things like Pascal and C++, then going to C# and finding type inference interesting, then getting a HUGE boost to my knowledge and skills when I found Python and JS. A few years later, my personal preference is having static type checking, and Typescript does that pretty well, in my opinion. However, every time I remember how much I managed to learn and understand about programming when I switched to Python, I think that if I had to teach someone, I&#x27;d pick something expressive, intuitive and who cares about types when you really want to maximize exposure.</p>",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: 27167886,
                              created_at: "2021-05-15T18:57:41.000Z",
                              author: "ylyn",
                              text: "<p>&gt; I think fighting the compiler for a likely-correct program in the end is a better alternative than understanding why the program failed with this given input and not with another</p><p>In my experience (having TAed a CS1 course) I think it is better for introductory students to be able to figure out what they are doing wrong, rather than having a compiler point it out to them.</p><p>In the first class, we want to focus on computational thinking and being able to then express their ideas into programs. So we intentionally use very little of the language (JS in my case), because the language is not the point of the course.</p><p>OOP and all these models of abstraction and code organisation come later, once they have a good grasp of the fundamentals.</p><p>This particular course I taught is only taken by CS freshmen, so that other commenter&#x27;s remark (that we should teach a popular language) doesn&#x27;t apply here.</p>",
                              children: [
                                {
                                  id: 27168096,
                                  created_at: "2021-05-15T19:24:39.000Z",
                                  author: "kaba0",
                                  text: "<p>&gt; I think it is better for introductory students to be able to figure out what they are doing wrong, rather than having a compiler point it out to them.</p><p>That’s implying they will find it out, instead of having a finished project that can randomly crash with a slightly different input.</p><p>Also, the compiler is basically just a shorter eval loop.</p><p>But I agree with you that OOP should only come later (though using objects is inevitable in most languages)</p>",
                                  children: [],
                                },
                              ],
                            },
                            {
                              id: 27167984,
                              created_at: "2021-05-15T19:10:41.000Z",
                              author: "dclowd9901",
                              text: "<p>Having gone the other way (starting with JS and moving into languages like Objective C), I actually disagree. Having a solid foundation in software writing helped me when I started to learn about the somewhat obtuse abstract concepts that tend to be coupled with learning strict typing.</p><p>Then, when learning Flow and Typescript, where I&#x27;m expected to have a meta understanding of typing itself, I was ready to go.</p>",
                              children: [],
                            },
                          ],
                        },
                        {
                          id: 27167476,
                          created_at: "2021-05-15T18:07:01.000Z",
                          author: "bachmeier",
                          text: "<p>&gt; it&#x27;s nice to avoid burdening beginners with extra syntax when they&#x27;re already struggling to learn other things</p><p>As someone that teaches college students to program (not in a CS department) that statement is correct but doesn&#x27;t provide the full picture. It&#x27;s good to get rid of the extra syntax if and only if you don&#x27;t need it - and that means you&#x27;re intentionally limiting what you&#x27;re teaching them.</p>",
                          children: [
                            {
                              id: 27167946,
                              created_at: "2021-05-15T19:06:11.000Z",
                              author: "extra88",
                              text: "<p>&gt; you&#x27;re intentionally limiting what you&#x27;re teaching them</p><p>Yes, that’s the point. It’s an introductory class, choices have to be made about what to teach when.</p>",
                              children: [
                                {
                                  id: 27168466,
                                  created_at: "2021-05-15T20:00:48.000Z",
                                  author: "bachmeier",
                                  text: "<p>Well, of course, but the point is that avoiding syntax is not a great criterion for defining the fundamentals of programming. A couple orders of magnitude more important is to decide what concepts are useful for beginning programmers to know.</p>",
                                  children: [
                                    {
                                      id: 27175288,
                                      created_at: "2021-05-16T17:25:10.000Z",
                                      author: "afiori",
                                      text: "<p>I took it as &quot;removing syntax left more space for other stuff&quot;</p>",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 27167267,
                  created_at: "2021-05-15T17:42:00.000Z",
                  author: "flowerlad",
                  text: "<p>Python is much more limited as an introductory language than JavaScript. JavaScript is very versatile. Need to write server-side logic? Use JavaScript and Node. Need to write a native iOS app? Use JavaScript and React Native. Need to write a command-line utility? Use JavaScript and Node again. Need to make your web page interactive? Use JavaScript in the browser. Python is versatile as well, but not to the extent of JavaScript. JavaScript, when type-checked using TypeScript also scales better to larger projects and development teams. The one area where Python shines is in machine learning, where Python is a de-facto standard. But here too, Python is facing stiff competition from Julia.</p>",
                  children: [
                    {
                      id: 27167553,
                      created_at: "2021-05-15T18:15:50.000Z",
                      author: "nojito",
                      text: "<p>None of these are requirements for a intro class</p><p>Python excels as a teaching language.</p>",
                      children: [
                        {
                          id: 27167618,
                          created_at: "2021-05-15T18:24:43.000Z",
                          author: "flowerlad",
                          text: "<p>The introductory course is not taken by just CS students. In most colleges, introductory programming courses are open to all majors. For many students this will be the only programming course they will ever take. Why wouldn&#x27;t you teach a language that is not only well designed, but also versatile, instead of just being a good &quot;teaching language&quot;?</p>",
                          children: [
                            {
                              id: 27169129,
                              created_at: "2021-05-15T21:19:47.000Z",
                              author: "maleldil",
                              text: "<p>&gt; not only well designed</p><p>JS, and its multitude of foot-guns, is not something I would call &#x27;well designed&#x27;.</p>",
                              children: [],
                            },
                            {
                              id: 27167734,
                              created_at: "2021-05-15T18:37:33.000Z",
                              author: "sigzero",
                              text: "<p>You are describing Python.</p>",
                              children: [],
                            },
                          ],
                        },
                        {
                          id: 27168402,
                          created_at: "2021-05-15T19:53:28.000Z",
                          author: "thrdbndndn",
                          text: "<p>Can confirm. As someone who never formally learn programming, the moment I learned Python I never touched C# or Javascript again at will.</p><p>The syntax of Python is just way, way more straightforward. I do agree it may be a disadvantage for serious software engineering, but as a hobby? I will pick Python over others all day every day.</p>",
                          children: [],
                        },
                      ],
                    },
                    {
                      id: 27167580,
                      created_at: "2021-05-15T18:19:49.000Z",
                      author: "maleldil",
                      text: "<p>It&#x27;s an introductory course. The goal isn&#x27;t to train students to be able to do all those things. I&#x27;d wager most professional programmers aren&#x27;t able to do more than a couple of them well. There&#x27;s more to front-end&#x2F;back-end&#x2F;CLI&#x2F;mobile than just the language.</p><p>&gt;  But here too, Python is facing stiff competition from Julia</p><p>You severely overestimate the significance of Julia in this field. It&#x27;s a great language, and I wish it were more popular, but Python still dwarfs it.</p>",
                      children: [],
                    },
                    {
                      id: 27167977,
                      created_at: "2021-05-15T19:10:08.000Z",
                      author: "6gvONxR4sf7o",
                      text: "<p>You seem to have limited visibility into python’s versatility. It’s much much more than you describe, and I’m saying that as someone who hates python with a passion (and has been gainfully employed writing python for most of my career).</p>",
                      children: [],
                    },
                    {
                      id: 27170288,
                      created_at: "2021-05-16T00:54:01.000Z",
                      author: "imiric",
                      text: "<p>Out of the use cases you mention only server-side and browser are a good fit for JavaScript, and Python does quite well on the backend. Writing mobile apps with JS is a frustrating experience at best, and requiring Node for a CLI app is not great UX, unless you bundle Node in an executable.</p><p>Students should learn early to use the right tool for the job, not reuse the same one just because it&#x27;s already familiar.</p><p>IMO Python is a better first language because it&#x27;s more approachable, and doesn&#x27;t have the prototypal inheritance and other quirks unique to JS (not that it doesn&#x27;t have quirks of its own, but most aren&#x27;t important early on).</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 27168399,
                  created_at: "2021-05-15T19:53:19.000Z",
                  author: "neonological",
                  text: "<p>Why did you guys switch to python instead of javascript?</p>",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 27170310,
          created_at: "2021-05-16T00:58:29.000Z",
          author: "cgopalan",
          text: "<p>No thanks. (j&#x2F;k)</p>",
          children: [],
        },
        {
          id: 27171334,
          created_at: "2021-05-16T04:59:56.000Z",
          author: "_pdp_",
          text: "<p>JavaScript is such a polarising  topic and I wonder why. Browsers are not dropping support anytime soon and the ecosystem is healthier than ever. Just use it for what it is good at. And if you are wondering what that is, it is a great high level programming language that is good at glueing things together. It is obviously not universal. You won’t write operating systems with JavaScript as much as you won’t write web applications with assembler. In both cases you can try if you are mad enough.</p><p>Great programmers and hackers don’t complain about the language as it is irrelevant. They just use whatever is available to get the job done and get it done well. The more programming languages you know well the more you understand that each has advantages and disadvantages. Part of being a pro is to know what to use under what circumstances. What’s the point of comparing apples to oranges?</p><p>Finally, you will always need a scripting language with a loose type system even when you start at the low levels. Don’t be so obsessed about type safety, etc. It only shows lack of skills to keep the program model in your head. Gaming engines are scriptable for a reason. It provides different ergonomics that are useful. There are plenty of Rust, Go and Java applications that that replace scripting with ill-conceived configuration templates that resemble scripts except that they are inferior. If you are writing a complex system in Rust, v8 is a modern, expressive scripting runtime that will help you rapidly prototype. That is not say it is better than Lua or Python. It really depends what you want to achieve. But choosing the right scripting language can also drive adoption. So choose wisely!</p>",
          children: [
            {
              id: 27171400,
              created_at: "2021-05-16T05:16:25.000Z",
              author: "jeswin",
              text: "<p>&gt; JavaScript is such a polarising topic and I wonder why.</p><p>If you ask me, the reasons are quite uncomfortable; and has parallels to how a lot of prejudice is seen in society when upward mobility happens. JS now encroaches server-side jobs, while earlier it was relegated to the browser. JS can do scripting. JS can now do native phone apps quite well. It can be used in desktop apps. It also pays well.</p>",
              children: [],
            },
            {
              id: 27171912,
              created_at: "2021-05-16T07:31:30.000Z",
              author: "btschaegg",
              text: '<p>Bryan Cantrill explains a very interesting thought about that here: <a href="https:&#x2F;&#x2F;youtu.be&#x2F;2wZ1pCpJUIM?t=1420" rel="nofollow">https:&#x2F;&#x2F;youtu.be&#x2F;2wZ1pCpJUIM?t=1420</a></p><p>I&#x27;m sure there are many other factors that play into this (just look at Gary Bernhardt&#x27;s &quot;WAT&quot; talk), but essentially, I agree that this has to be a big part of the problem. If you&#x27;ve been developing backend systems and asked to hold up robustness and stability guarantees for multiple years and then run into Javascript, you will likely run into situations where you have to make up for its deficiencies in that regard.</p><p>That doesn&#x27;t make it a bad language per se -- that&#x27;s the case with any language in some aspects -- but since JS will be a new language to you, you&#x27;re much less likely to accept that situation as a given.</p>',
              children: [],
            },
            {
              id: 27187542,
              created_at: "2021-05-17T19:46:14.000Z",
              author: "veidelis",
              text: '<p>&quot;Gaming engines are scriptable for a reason&quot; - I&#x27;m sure I&#x27;ve heard the opposite opinion from respectable sources at least 2 times. Here&#x27;s Jonathan Blow\n<a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=y2Wmz15aXk0" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=y2Wmz15aXk0</a>\nI agree with the rest wholeheartedly.</p>',
              children: [],
            },
            {
              id: 27171519,
              created_at: "2021-05-16T05:57:11.000Z",
              author: "m12k",
              text: "<p>&gt; JavaScript is such a polarising topic and I wonder why</p><p>Probably because it&#x27;s a gatekeeper language - in order to run code in a browser, you have to use this language[1]. That means a lot of developers that dislike it enough that they would switch to another language if they could, are stuck with it because they need to target the browser. This &quot;captive audience&quot; is effectively forced to engage with the things they dislike on a daily basis - at that point you either develop Stockholm syndrome, or the resentment grows into hatred. Thus the &quot;warts&quot; that JavaScript has (by nature of having been thrown together in a couple weeks originally, and being iteratively turned into a &quot;real&quot; language over the following decades) have a chance to cause much stronger negative feelings than they would if people could just switch to something they liked more.</p><p>[1] I know, I know, WebAssembly may change this, and there are already niche alternatives like Scala.js, ClojureScript, Blazor and Reason - but for the most part, you still can&#x27;t effectively run things in a browser without knowing JavaScript, even if just for debugging</p>",
              children: [
                {
                  id: 27171705,
                  created_at: "2021-05-16T06:42:03.000Z",
                  author: "_pdp_",
                  text: "<p>All good things start small and evolve. The C programming language was created over the weekend if I am not mistaken and look how much it stuck for better or worse. JavaScript was also accidental. There was a time you could program web sites in VisualBasic, ActiveX, Java, Silverlight and Flash. They are now all gone. There is no denying that the JavaScript language is resilient. It stuck for better or worse.</p><p>Developers can choose to program in whichever language they want but only JavaScript is officially supported on the browser. Any other language will require a transpiler or compiler (when it comes to WASM). Similarly you can program iOS and Android apps in whichever language you like but only Objective-C&#x2F;Swift and Java are officially supported. All other languages you need to support yourself. The official spoken language in UK is English whether you like it or not. You are free to speak any other language you want but social frameworks and civil services evolve around a single language.</p><p>If developers are so smart how come we cannot understand these basic principles?</p>",
                  children: [],
                },
              ],
            },
            {
              id: 27174862,
              created_at: "2021-05-16T16:40:02.000Z",
              author: "anthony_romeo",
              text: "<p>My argument on why it&#x27;s polarizing is largely historical. Javascript was a hot mess for decades. I stepped away from web design for a while simply because accomplishing anything meaningful in js always felt like a hacky mess to me. At some point, getting anything done required learning new frameworks getting obsoleted within a year or so (jquery?). \nIt&#x27;s a reputation that&#x27;s hard to shed.</p><p>Last year I finally started to dabble in Node. Though I fully understand the criticisms of Node, learning it really did open my eyes on just how far js has advanced. I&#x27;m really loving the present state of js callbacks&#x2F;anonymous functions, leading to elegant solutions that I now miss when going back to Python.</p>",
              children: [],
            },
          ],
        },
        {
          id: 27170567,
          created_at: "2021-05-16T01:54:28.000Z",
          author: "da39a3ee",
          text: "<p>Is there any chance javascript will get comprehensions (array, set, map, generator)? I know there was a proposal a few years ago that didn&#x27;t go forwards.</p>",
          children: [
            {
              id: 27171200,
              created_at: "2021-05-16T04:18:59.000Z",
              author: "hajile",
              text: "<p>It seems fairly unlikely to me at this point. Instead, you&#x27;ll be told to do something like this</p><p><pre><code>    [...foo.filter(x =&gt; x % 2 === 0)]\n    rather than\n    [foo | where x % 2 === 0]</code></pre></p>",
              children: [
                {
                  id: 27173330,
                  created_at: "2021-05-16T12:46:34.000Z",
                  author: "da39a3ee",
                  text: "<p>Apart from the arguable syntactic attractions, does it not bother people that chained maps&#x2F;filters traverse the iterable multiple times, whereas comprehensions would give the language a chance to compile a complex comprehension down to a single traversal?</p>",
                  children: [
                    {
                      id: 27173485,
                      created_at: "2021-05-16T13:12:22.000Z",
                      author: "hajile",
                      text: "<p>They need to add iterator versions of the built-ins. At that point, not only this, but a ton of other efficiency issues go away. At present, chaining lodash functions together will integrate once, so I’d recommend using them to save time and memory.</p>",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 27166475,
          created_at: "2021-05-15T16:13:45.000Z",
          author: "XCSme",
          text: "<p>Some other important features and browser APIs released in the last ~10 years: Web Workers, WebGL, OffscreenCanvas, Typed Arrays, Web Audio, Web Notifications, WebRTC, Websockets.</p>",
          children: [
            {
              id: 27166597,
              created_at: "2021-05-15T16:26:33.000Z",
              author: "dleslie",
              text: "<p>Does anyone have a handy reference for those, that they would recommend?</p>",
              children: [
                {
                  id: 27166621,
                  created_at: "2021-05-15T16:29:36.000Z",
                  author: "meheleventyone",
                  text: '<p><a href="https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;" rel="nofollow">https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;</a></p><p>MDN is amazing, coming from games and working on a web project the level of documentation is incredible.</p>',
                  children: [
                    {
                      id: 27167222,
                      created_at: "2021-05-15T17:36:49.000Z",
                      author: "irrational",
                      text: '<p>It should be considering who is backing it.</p><p><a href="https:&#x2F;&#x2F;www.infoq.com&#x2F;news&#x2F;2017&#x2F;10&#x2F;microsoft-google-mozilla-mdn&#x2F;" rel="nofollow">https:&#x2F;&#x2F;www.infoq.com&#x2F;news&#x2F;2017&#x2F;10&#x2F;microsoft-google-mozilla-...</a></p>',
                      children: [
                        {
                          id: 27167403,
                          created_at: "2021-05-15T17:58:36.000Z",
                          author: "meheleventyone",
                          text: "<p>Even big companies such as those supporting MDN have terrible developer documentation. MDN is something quite special even given who supports it.</p>",
                          children: [
                            {
                              id: 27169451,
                              created_at: "2021-05-15T22:06:44.000Z",
                              author: "XCSme",
                              text: "<p>To be honest, MDN docs were really good even before it started getting support from other companies.</p>",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 27180555,
          created_at: "2021-05-17T06:23:19.000Z",
          author: "pmontra",
          text: "<p>&gt; in order to use await, you have to be executing a function declared as async</p><p>I feel like I&#x27;m doing the work of the compiler. Why can&#x27;t it automatically make the function async whenever it sees an await within it?</p>",
          children: [],
        },
        {
          id: 27177484,
          created_at: "2021-05-16T22:07:24.000Z",
          author: "russellbeattie",
          text: "<p>Repeat after me: <i>Semicolons are not optional in JavaScript.</i></p><p>ASI is an error correction mechanism, not a language feature. You can also do things like not using the var keyword when declaring variables or something like a = 2 &lt; &quot;4&quot;; and it&#x27;ll work fine. But you don&#x27;t because they&#x27;re all errors.</p>",
          children: [],
        },
        {
          id: 27171342,
          created_at: "2021-05-16T05:01:55.000Z",
          author: "mraza007",
          text: "<p>I love how JavaScript has become the lingua Franca of the browser world but there are some things that JavaScript allows the others languages don’t allow.</p>",
          children: [],
        },
        {
          id: 27167251,
          created_at: "2021-05-15T17:40:23.000Z",
          author: "csbartus",
          text: "<p>I don’t really know. For me, it’s like PHP, or worse. Yes, this modern javascript, the old one is even worse.</p><p>I’m trying to get rid of it and move to a functional language like Clojure (actively learning) or perhaps Rescript.</p><p>Meantime I found Ramda.js and so far so good. No more javascript fatigue.</p><p>Ramda, React, and Typescript looks like a good patch for the short term. On long term I definitely need something integrated.</p><p>And something integrated with the running environment. Node, Webpack, Babel are a real pain.</p><p>I think the future is bright. We’ve learnt the pain making all above work, and work together. Now something really new is coming.</p><p>Statically typed, functional (the good parts), focussing on problem solving, and leaving the quirks behind.</p>",
          children: [],
        },
        {
          id: 27168022,
          created_at: "2021-05-15T19:15:15.000Z",
          author: "bronlund",
          text: "<p>That whole Node thing was a huge mistake and people are starting realize it.</p><p>Using JavaScript on the server is bad for so many reasons and the complexity Node introduces for doing the simplest of things, is just just mind-boggling.</p><p>For the future, I&#x27;m betting om Elixir with Phoenix LiveView, pushing server-side rendered HTML through WebSockets.</p>",
          children: [],
        },
        {
          id: 27168794,
          created_at: "2021-05-15T20:39:31.000Z",
          author: "lukicdarkoo",
          text: "<p>Professionally, I do embedded and robotics, but once a year I find an excuse to create a simple web application (to stay updated). Every time, I get impressed by power and simplicity of the web technologies in general. In JavaScript those are things mentioned in the article + WebComponents. For CSS those are flexboxes, grids, and animations. In my opinion, React made a revolution with hooks and contexts. I love the direction in which the web world has been going!</p>",
          children: [
            {
              id: 27169548,
              created_at: "2021-05-15T22:21:53.000Z",
              author: "biinui",
              text: "<p>May you kindly point me where to start learning robotics, and recommendation for a starter robot arm? Maybe ~$300 if something worthwhile exists at that price range. Take care.</p>",
              children: [
                {
                  id: 27170238,
                  created_at: "2021-05-16T00:40:04.000Z",
                  author: "crooked-v",
                  text: '<p>Lego Mindstorms could be worth considering as a general-purpose hobby robotics platform: EV3 (the older version) can be flashed with a custom Linux distro, and Robot Inventor (the newer one) can run Python scripts. In either case all you need to add more structural parts is to pick up a bulk case of used Technic parts, so it&#x27;s eminently reusable for multiple unrelated projects.</p><p>For an example of stuff people have built with them, here&#x27;s a Robot Inventor-based Rubik&#x27;s cube solver: <a href="https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=_cl2Wur8waY" rel="nofollow">https:&#x2F;&#x2F;www.youtube.com&#x2F;watch?v=_cl2Wur8waY</a></p>',
                  children: [
                    {
                      id: 27170497,
                      created_at: "2021-05-16T01:39:26.000Z",
                      author: "monocasa",
                      text: "<p>Oh jeeze, I feel old if the EV3 is being described as &quot;the older one&quot;.  I have horrible memories of writing some &quot;Not Quite C&quot; for RCX because the compiler didn&#x27;t support modern amenities like stack frames.</p><p>Being able to just run Linux on the thing sounds like a god send.</p>",
                      children: [
                        {
                          id: 27170536,
                          created_at: "2021-05-16T01:49:07.000Z",
                          author: "wcarss",
                          text: "<p>A group I worked with in a high school lego robotics competition managed, if I recall correctly, to achieve &#x27;recursion&#x27; by defining 2 very similar functions and having them just call each other. It was a frustrating device at times but also a really fun experience!</p>",
                          children: [
                            {
                              id: 27170779,
                              created_at: "2021-05-16T02:41:01.000Z",
                              author: "cema",
                              text: "<p>Is called a trampoline,  a standard trick more or less.</p>",
                              children: [
                                {
                                  id: 27174983,
                                  created_at: "2021-05-16T16:52:33.000Z",
                                  author: "wcarss",
                                  text: "<p>Cool! That makes sense -- it still felt <i>incredibly</i> clever and tricksy to us when we were about 16 and trying to map our &#x27;beautiful algorithm&#x27; into NQC sometime past midnight, for a morning competition.</p>",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 27171271,
                  created_at: "2021-05-16T04:39:55.000Z",
                  author: "MarkSweep",
                  text: '<p>Not OP. This is not necessarily the friendliest or best place to start, but in terms of hardware costs it&#x27;s great: the ST-Micro P-NUCLEO-IHM001:</p><p><a href="https:&#x2F;&#x2F;www.st.com&#x2F;en&#x2F;evaluation-tools&#x2F;p-nucleo-ihm001.html" rel="nofollow">https:&#x2F;&#x2F;www.st.com&#x2F;en&#x2F;evaluation-tools&#x2F;p-nucleo-ihm001.html</a></p><p>For $35 you get a little motor, a motor control board, and an ARM micro-controller board. ST includes some software for motor control. If you want to do precision motor control,  out of the box it is missing an encoder (a device that tells you the position of the motor). The STM32 chips usually have some inputs you can use with a quadrature encoder, so you could add one if you needed to. It does include a current sensor and the software uses the for field-oriented control (FOC), so you can efficiently and smoothly control the speed of the motor. To learn more about motor commutation and FOC, check out this document:</p><p><a href="https:&#x2F;&#x2F;www.actronic-solutions.de&#x2F;files&#x2F;actronic&#x2F;FTPROOT&#x2F;Field-Oriented-Control.pdf" rel="nofollow">https:&#x2F;&#x2F;www.actronic-solutions.de&#x2F;files&#x2F;actronic&#x2F;FTPROOT&#x2F;Fie...</a></p>',
                  children: [
                    {
                      id: 27171419,
                      created_at: "2021-05-16T05:21:22.000Z",
                      author: "jb1991",
                      text: "<p>Strange, I was pretty sure your parent was asking sarcastically!</p>",
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: 27171598,
              created_at: "2021-05-16T06:15:48.000Z",
              author: "idkwhoiam",
              text: '<p>My only issue with CSS is the absence of container queries [1]. Now I need to rely on size listeners of the container element to make my components truly responsive. Media Queries do not work for components. CSS Grid &amp; Flexbox are nice but not enough to achieve radical layout changes for certain breakpoints.</p><p>[1] - <a href="https:&#x2F;&#x2F;css-tricks.com&#x2F;say-hello-to-css-container-queries&#x2F;" rel="nofollow">https:&#x2F;&#x2F;css-tricks.com&#x2F;say-hello-to-css-container-queries&#x2F;</a></p>',
              children: [
                {
                  id: 27173987,
                  created_at: "2021-05-16T14:34:40.000Z",
                  author: "willhoyle",
                  text: '<p><a href="https:&#x2F;&#x2F;github.com&#x2F;marcj&#x2F;css-element-queries" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;marcj&#x2F;css-element-queries</a></p><p>I’ve had pretty decent success using this library.</p>',
                  children: [],
                },
              ],
            },
            {
              id: 27171422,
              created_at: "2021-05-16T05:22:31.000Z",
              author: "rkagerer",
              text: "<p>One thing I hate about the modern web is pages that load with lots of missing content &#x2F; empty components and then download and render that content afterward.</p><p>Is this a React thing?</p><p>Waiting for the extra request(s) adds lag time, makes back&#x2F;forward navigation clunky, interrupts what I was doing if I already began interacting with the page (eg. infamous relayout &#x2F; unwanted scroll) and sometimes breaks snapshotting tools like archive.is.</p><p>I don&#x27;t mind pages with javascripted controls, but their initial content should be included in the payload with the initial page load.  Don&#x27;t the frameworks have tools to help you do that?</p>",
              children: [
                {
                  id: 27172166,
                  created_at: "2021-05-16T08:33:31.000Z",
                  author: "mbirth",
                  text: "<p>You can probably thank Google for that as to get a higher page ranking, a site must do the initial load fast. And showing only empty placeholders <i>is</i> fast.</p>",
                  children: [],
                },
                {
                  id: 27171685,
                  created_at: "2021-05-16T06:36:28.000Z",
                  author: "allset_",
                  text: "<p>It&#x27;s not specifically a React thing, but JavaScript enables it. Lazy-loading content is a good idea if you&#x27;re building dynamic web _applications_, as common components (buttons, modals, etc.) don&#x27;t need to be reloaded over and over. However, with mostly static content like a blog, it&#x27;s generally not a great idea.</p>",
                  children: [],
                },
                {
                  id: 27179161,
                  created_at: "2021-05-17T01:33:59.000Z",
                  author: "dzhiurgis",
                  text: "<p>Any modern browser automation tool can wait for all requests loaded. Also sounds like you need better internet or re-check your expectations.</p>",
                  children: [
                    {
                      id: 27182349,
                      created_at: "2021-05-17T11:40:05.000Z",
                      author: "Fredej",
                      text: "<p>I absolutely agree with OP. I find it annoying that things load like that - even on a gigabit line with a beefy modern CPU. The solution is not to slow everything down to wait for the last thing to be loaded.</p><p>That UI&#x2F;UX is getting slower as everything is getting faster is a sad reality of the times. But I guess that&#x27;s the price of faster iterations, easier developer flows and a building on top of the lates greatest framework.</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 27177421,
                  created_at: "2021-05-16T22:01:36.000Z",
                  author: "deergomoo",
                  text: "<p>&gt; their initial content should be included in the payload with the initial page load</p><p>The problem with that is that it pretty much requires you be running node on the back end too. If your back end is built with say PHP or Ruby, you’d need to call out to a node process, which is potentially a lot of additional complexity, time, and expertise.</p>",
                  children: [
                    {
                      id: 27177689,
                      created_at: "2021-05-16T22:35:15.000Z",
                      author: "gpanders",
                      text: "<p>What, why? It’s just HTML, which PHP and Ruby can generate just fine.</p>",
                      children: [
                        {
                          id: 27181795,
                          created_at: "2021-05-17T10:08:09.000Z",
                          author: "deergomoo",
                          text: "<p>If your component is generated by something like React you&#x27;d need to be running React on the back end to pre-render the component and have the front end re-hydrate it.</p><p>Otherwise you&#x27;d be trying to implement everything once in JS and once in PHP&#x2F;Ruby</p>",
                          children: [],
                        },
                      ],
                    },
                    {
                      id: 27180266,
                      created_at: "2021-05-17T05:14:11.000Z",
                      author: "midrus",
                      text: "<p>Even if you are talking about SSR such as how Next.js does it, you wouldn&#x27;t be spanning processes from your ruby&#x2F;php application. You would deploy it as a separate application responsible of the frontend, using your ruby&#x2F;php application as a backend service providing an API.</p><p>An alternative is to just serve the HTML from your ruby&#x2F;php and then take over in the frontend, but this is more complex and not worth it in my opinion.</p>",
                      children: [
                        {
                          id: 27181811,
                          created_at: "2021-05-17T10:09:53.000Z",
                          author: "deergomoo",
                          text: "<p>&gt; An alternative is to just serve the HTML from your ruby&#x2F;php and then take over in the frontend</p><p>This is still incredibly common for apps that are mostly server rendered but use React&#x2F;Vue etc &quot;sprinkled&quot; through the codebase for more complex bits of UI.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 27173758,
              created_at: "2021-05-16T13:59:55.000Z",
              author: "valand",
              text: "<p>On React, people talk about it especially for it being a UI tool.</p><p>But the most significant feat React achieved IMO is how easy to write asynchronous hiearchical actors (from actor model) with it (kind of like erlang vm).</p><p>Context enables dependency injection and ownership management. Effect and state enables object ownership and lifetime management. Js timers,  (i.e. setTimeout, setInterval, queueMicrotask, promise&#x2F;async), help making an object living asynchronously as if it has its own private thread.</p><p>Yes, those are similar concept of lifetime and ownership Rust have, but instead of functions&#x2F;blocks the object (value in memory) is owned by&#x2F;shared with components. And of course these are not enforceable by compilers&#x2F;transpilers&#x2F;linters due to them not being a javascript-primitive, but at least React helps organizing those things in a lot more explicit and clear manner.</p>",
              children: [],
            },
            {
              id: 27170719,
              created_at: "2021-05-16T02:28:06.000Z",
              author: "BrissyCoder",
              text: "<p>&gt; simplicity of the web technologies in general</p><p>Are we looking at the same web technologies here or are you from an alternative universe?</p>",
              children: [
                {
                  id: 27171845,
                  created_at: "2021-05-16T07:12:17.000Z",
                  author: "rtpg",
                  text: "<p>Try writing a GUI with other toolkits. Hours of tweaking random XML to try and figure out why some constraint solving thing just isn&#x27;t working...</p><p>Despite all the mess, I have an easier time getting buttons on a screen and doing things sanely (once all the fuss is set up) compared to trying to get the ball rolling in Qt&#x2F;GTK&#x2F;etc (especially if you&#x27;re not using Java or C++)</p>",
                  children: [
                    {
                      id: 27175942,
                      created_at: "2021-05-16T18:39:37.000Z",
                      author: "jcelerier",
                      text: '<p>&gt; I have an easier time getting buttons on a screen and doing things sanely (once all the fuss is set up) compared to trying to get the ball rolling in Qt&#x2F;GTK&#x2F;etc (especially if you&#x27;re not using Java or C++)</p><p>ah, yes, the famous difficulty of getting buttons on a screen in Qt <a href="https:&#x2F;&#x2F;streamable.com&#x2F;bs5fxk" rel="nofollow">https:&#x2F;&#x2F;streamable.com&#x2F;bs5fxk</a></p>',
                      children: [
                        {
                          id: 27176553,
                          created_at: "2021-05-16T20:02:44.000Z",
                          author: "einpoklum",
                          text: "<p>I agree that it&#x27;s pretty simple to get a button on screen in Qt, but your linked video presents it as horribly complicated. And requiring an IDE to do it is pre-admitting it&#x27;s complicated.</p><p>By the way - Qt and GTK are super-outdated ways to do GUI in C++. Popular, but outdated.</p>",
                          children: [
                            {
                              id: 27176663,
                              created_at: "2021-05-16T20:16:47.000Z",
                              author: "indigo945",
                              text: "<p>What do you feel is a more &quot;modern&quot; way to do a GUI in C++?</p><p>As an aside, do &quot;modern&quot; developers still write GUI applications at all, since everything is on the web anyway these days?</p>",
                              children: [
                                {
                                  id: 27181650,
                                  created_at: "2021-05-17T09:50:04.000Z",
                                  author: "alibarber",
                                  text: "<p>There is a wide world of applications and development that don&#x27;t have anything to do with the web.</p><p>The films you watch on TV or at the cinema were not created (edited, VFX) using a web browser for a start, and the User Interfaces to those applications are pretty Graphical by anyone&#x27;s definition...</p>",
                                  children: [
                                    {
                                      id: 27182135,
                                      created_at: "2021-05-17T11:06:08.000Z",
                                      author: "hnbad",
                                      text: "<p>As a counter point: plenty of desktop software embeds web technologies these days and even AAA games occasionally use them. I think Battlefield was a prominent example for React being used in AAA games for UIs. The Horizon TV streaming box also had a UI written in React (rendering to canvas for performance using their custom Chromium build I think, but they wrote it so the UI could also be rendered to the DOM so they could use it in their web version).</p><p>Not disagreeing with what you said, but &quot;not having anything to do with the web&quot; isn&#x27;t as clear cut as it used to be and web technologies are increasingly showing up in unexpected places.</p>",
                                      children: [],
                                    },
                                    {
                                      id: 27181719,
                                      created_at: "2021-05-17T09:58:42.000Z",
                                      author: "jcelerier",
                                      text: '<p>&gt; The films you watch on TV or at the cinema were not created (edited, VFX) using a web browser for a start</p><p>to add on this, the reference UI toolkit for building VFX tools is Qt. Maya, DaVinci, Lightworks, Nuke... are all Qt-based.</p><p><a href="https:&#x2F;&#x2F;vfxplatform.com&#x2F;" rel="nofollow">https:&#x2F;&#x2F;vfxplatform.com&#x2F;</a></p>',
                                      children: [],
                                    },
                                  ],
                                },
                                {
                                  id: 27180667,
                                  created_at: "2021-05-17T06:46:32.000Z",
                                  author: "krapht",
                                  text: "<p>Is this a joke? There&#x27;s a whole world of software out there that isn&#x27;t web based. Anybody who hasn&#x27;t switched to a Chromebook uses them every day.</p><p>I even write terminal user interfaces sometimes to interact with servers that don&#x27;t have a desktop environment installed.</p>",
                                  children: [
                                    {
                                      id: 27182871,
                                      created_at: "2021-05-17T12:56:11.000Z",
                                      author: "cat199",
                                      text: "<p>if you reread, this is what the parent is asking of the grandparent, in less nice terms.</p>",
                                      children: [],
                                    },
                                  ],
                                },
                                {
                                  id: 27185869,
                                  created_at: "2021-05-17T17:26:20.000Z",
                                  author: "einpoklum",
                                  text: "<p>Well, the question of what&#x27;s &quot;modern&quot; in C++ is both deep and contentions. But I won&#x27;t shirk the question...</p><p>You want to be utilizing the features C++11, C++14 and maybe even newer versions of the standard allow you to use, to avoid unnecessary boilerplate, repetition, and arcane-ness of syntax and semantics.</p><p>Similarly, the GUI toolkit should not be based on C-like or C++98-like design patterns, when newer versions of the standard allow replacing them with more convenient patterns.</p><p>Here&#x27;s one example, from the Nana C++ GUI toolkit:</p><p><pre><code>  #include &lt;nana&#x2F;gui.hpp&gt;\n  #include &lt;nana&#x2F;gui&#x2F;widgets&#x2F;label.hpp&gt;\n  #include &lt;nana&#x2F;gui&#x2F;widgets&#x2F;button.hpp&gt;\n\n  int main() {\n      nana::form form;\n\n      nana::label label{form, &quot;Hello, &lt;bold blue size=16&gt;Nana C++ Library&lt;&#x2F;&gt;&quot;};\n      label.format(true);\n\n      nana::button button{form, &quot;Quit&quot;};\n      button.events().click( [&amp;form]{ form.close(); } );\n\n      form.div(&quot;vert &lt;&gt;&lt;&lt;&gt;&lt;weight=80% text&gt;&lt;&gt;&gt;&lt;&gt;&lt;weight=24&lt;&gt;&lt;button&gt;&lt;&gt;&gt;&lt;&gt;&quot;);\n      form[&quot;text&quot;] &lt;&lt; label;\n      form[&quot;button&quot;] &lt;&lt; button;\n      form.collocate();\n \n      form.show();\n \n      &#x2F;&#x2F;Start to event loop process, it blocks until the form is closed.\n      nana::exec();\n  }\n\n</code></pre>\nThis is not perfect IMHO; for example, I don&#x27;t really like the confusing div string with the many &lt; and &gt; signs. But you can put this in a text editor, build it with `g++ -I&#x2F;path&#x2F;to&#x2F;nana&#x2F;includes -L&#x2F;path&#x2F;to&#x2F;nana&#x2F;libs -lnana` - and it will just work, on various platforms. No secret sauce, no need for a bunch of IDE dialogs or any special configuration or action.</p>",
                                  children: [
                                    {
                                      id: 27186536,
                                      created_at: "2021-05-17T18:31:38.000Z",
                                      author: "jcelerier",
                                      text: '<p>Here&#x27;s a quick port to Qt (except for the &lt;&gt; thing which I did not really understand after a cursory reading of its docs)</p><p><pre><code>    #include &lt;QtWidgets&gt;\n\n    int main(int argc, char **argv) {\n      QApplication app{argc, argv};\n      QWidget widg;\n      QVBoxLayout form{&amp;widg};\n\n      QLabel label{\n          R&quot;(Hello, &lt;span style=&quot;font-weight: 600; font-size: 16pt; color: blue;&quot;&gt;Qt C++ Library&lt;&#x2F;span&gt;)&quot;};\n\n      QPushButton button{&quot;Quit&quot;};\n      button.connect(&amp;button, &amp;QPushButton::clicked, [&amp;widg] { widg.close(); });\n\n      form.addStretch(0.1);\n      form.addWidget(&amp;label);\n      form.addStretch(0.7);\n      form.addWidget(&amp;button);\n      form.addStretch(0.2);\n\n      widg.show();\n\n      app.exec();\n    }\n</code></pre>\nBuilds with</p><p><pre><code>    g++ example.cpp -I&#x2F;usr&#x2F;include&#x2F;qt&#x2F; -I&#x2F;usr&#x2F;include&#x2F;qt&#x2F;QtWidgets -fPIC -lQt5Widgets -lQt5Core\n</code></pre>\nHere&#x27;s also how the two programs behave in practice:   <a href="https:&#x2F;&#x2F;streamable.com&#x2F;brltmc" rel="nofollow">https:&#x2F;&#x2F;streamable.com&#x2F;brltmc</a></p><p>tl;ds: now that I saw it in action, I know I can instantly ignore anyone who says that nana is a suitable replacement for Qt.</p>',
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              id: 27177200,
                              created_at: "2021-05-16T21:33:24.000Z",
                              author: "jcelerier",
                              text: "<p>&gt; but your linked video presents it as horribly complicated.</p><p>... could you precise that more ? I&#x27;m literally just making &quot;new project&quot; &gt; design view &gt; search for the button component &gt; drag&#x27;n&#x27;drop it ? How can it get more simple ?</p><p>(opening a text file and writing &quot;Button {}&quot; is <i>definitely</i> more complicated if we&#x27;re talking about teaching to beginners)</p>",
                              children: [
                                {
                                  id: 27182116,
                                  created_at: "2021-05-17T11:01:05.000Z",
                                  author: "hnbad",
                                  text: "<p>There are visual editors for React. Pretending QT is easier than web technologies because it&#x27;s easier to drag a component in a visual editor than type text in a code editor is comparing editors, not UI technologies.</p>",
                                  children: [
                                    {
                                      id: 27183089,
                                      created_at: "2021-05-17T13:23:07.000Z",
                                      author: "jcelerier",
                                      text: '<p>Are you saying that React is easier than this purely code-wise: <a href="https:&#x2F;&#x2F;qmlonline.kde.org&#x2F;" rel="nofollow">https:&#x2F;&#x2F;qmlonline.kde.org&#x2F;</a></p>',
                                      children: [
                                        {
                                          id: 27184838,
                                          created_at:
                                            "2021-05-17T15:51:15.000Z",
                                          author: "hnbad",
                                          text: "<p>It&#x27;s about the same but you can do this with minimal HTML and CSS using a basic CSS keyframe animation.</p>",
                                          children: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  id: 27180741,
                                  created_at: "2021-05-17T07:02:18.000Z",
                                  author: "bryanrasmussen",
                                  text: "<p>&gt;(opening a text file and writing &quot;Button {}&quot; is definitely more complicated if we&#x27;re talking about teaching to beginners)</p><p>if teaching beginners to programming sure, if teaching a programmer beginning QT development no.</p>",
                                  children: [
                                    {
                                      id: 27181206,
                                      created_at: "2021-05-17T08:28:13.000Z",
                                      author: "jcelerier",
                                      text: "<p>I disagree, the first case is discoverable, the second isn&#x27;t at all. But apparently no one cares about discoverability of tools in 2021..</p>",
                                      children: [
                                        {
                                          id: 27181832,
                                          created_at:
                                            "2021-05-17T10:12:15.000Z",
                                          author: "bryanrasmussen",
                                          text: "<p>I mean the second case is generally discoverable for a programmer because there will documentation of a language or API. I believe people are generally aware of discoverability of documentation in 2021.</p>",
                                          children: [
                                            {
                                              id: 27182593,
                                              created_at:
                                                "2021-05-17T12:17:32.000Z",
                                              author: "jcelerier",
                                              text: "<p>&gt;  I believe people are generally aware of discoverability of documentation in 2021.</p><p>as someone who teaches programming in university, that&#x27;s definitely not true, less than 1 in 20 students has the reflex of looking for any kind of documentation (even after showing it to them)</p>",
                                              children: [
                                                {
                                                  id: 27182734,
                                                  created_at:
                                                    "2021-05-17T12:36:45.000Z",
                                                  author: "bryanrasmussen",
                                                  text: "<p>well I&#x27;m discussing what is easiest for working programmers, although it&#x27;s true I do hear about there being a bunch of really bad ones out there so maybe I am just assuming too much.</p>",
                                                  children: [],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  id: 27182589,
                                  created_at: "2021-05-17T12:17:11.000Z",
                                  author: "presentation",
                                  text: "<p>Just that starting modal with 6 steps to choose various configuration stuff would probably throw a beginner into a loop for a while, even if you could just skip it all. Maybe if this IDE wanted to be beginner friendly, they ought to consider just having reasonable defaults and letting power users change them later - like how web tools tend to be designed these days.</p>",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 27173950,
                      created_at: "2021-05-16T14:29:56.000Z",
                      author: "kodah",
                      text: "<p>Having worked on both desktop and web UIs the problem you&#x27;re describing occurs in both worlds. Usually with web you run into it when you&#x27;re dealing with a more sizeable app, or fancier things you want to do with your framework.</p>",
                      children: [],
                    },
                    {
                      id: 27176529,
                      created_at: "2021-05-16T19:58:50.000Z",
                      author: "1vuio0pswjnm7",
                      text: "<p>Sounds like &quot;developer productivity&quot; could be increased by not having to create GUIs.  As an end user, I will happpily accept and in fact prefer text-based, keyboard-driven interfaces.</p>",
                      children: [],
                    },
                    {
                      id: 27171965,
                      created_at: "2021-05-16T07:46:49.000Z",
                      author: "cies",
                      text: "<p>If not using C++ with Qt, Qt is a bit harder to get going. But I honestly dont think that building a UI with JS&#x2F;HTML&#x2F;CSS is easier than in C++&#x2F;Qt.</p><p>But then the Qt UI:</p><p>* needs to be (re)compiled for each platform</p><p>* needs to be re-shipped on each change</p><p>* is not a client-server application (all runs on the client)</p><p>* has &quot;desktop styling&quot; by default</p>",
                      children: [],
                    },
                    {
                      id: 27172003,
                      created_at: "2021-05-16T07:57:26.000Z",
                      author: "klausjensen",
                      text: "<p>Agreed wrt other GUI toolkits.</p><p>I think of it like democracy. It is ugly and terrible, but still better than all the other options.</p>",
                      children: [],
                    },
                    {
                      id: 27172042,
                      created_at: "2021-05-16T08:07:07.000Z",
                      author: "kaba0",
                      text: "<p>Absolutely not true. Windows forms, WPF, JavaFX, Swing all are much more productive than the vanilla web. Like, how many lines of code does the most basic vbox&#x2F;hbox thing requires in web technology? Many of them even have dragndrop ui creations, and this XML hatred is downright stupid at this point. How about criticizing the technology and not a random medium for that? Is writing something stupid in JSON inherently better?</p><p>HTML is simply a terrible GUI base, JS is quite great nowadays and CSS would be great, but has to provide way too much of what HTML should be doing. But the web ui frameworks are just barely getting at the level of where native frameworks have been in a decade.</p>",
                      children: [
                        {
                          id: 27172864,
                          created_at: "2021-05-16T11:16:08.000Z",
                          author: "noduerme",
                          text: "<p>Such a great point. HTML is a terrific way to write documents and TERRIBLE way to lay out applications - especially for lots of different screen sizes. It&#x27;s not surprising at all to see Google embracing Canvas now to underpin Docs; basically they are admitting that it would have been better to write the whole program in a Java VM or in Flash than to rely on the browser for layout. This is patently obvious to anyone who builds large web applications. Ten years ago we had ASWing, JSwing and plenty of other actual frameworks where you didn&#x27;t have to diddle around with tons of logic embedded in templates which were embedded in other logic; but thanks to Apple we&#x27;re still saddled with this wretched Javascript&#x2F;HTML paradigm that was never meant to do much more than inline some animated GIFs back in the 90s. Yes, it&#x27;s gotten better (I&#x27;ve been doing this since the 90s, so I know). But it&#x27;s so inelegant. To some degree this is just a problem with open web standards. It would be better if any one company actually had dominated to the point where they could write a closed standard, because at least it would be coherent and cross-platform. It was a lot easier to write a web app in 2010 than it is now, and it pains me to think how many hours I could have avoided reinventing the wheel if Flash had been allowed to stick around. Any app written entirely now on canvas is just replicating a VM that already existed a decade ago in what was by then a much more mature ecosystem - and was faster then than canvas or WebGL is now.</p><p>If I had to pick a stack to do a new web app entirely in canvas, I&#x27;d probably choose to port a ton of interface components from AS3 into PixiJS... but the point is, where have we gotten? Ten years from now we&#x27;ll be writing apps the way they were written in 2010 -- inside a black box in a canvas or VM. The HTML5&#x2F;JS revolution has been a sham from the start, just a way for one corporation to dismantle another with the side benefit of forcing all of us to rewrite our code from scratch in a crappier language.</p>",
                          children: [],
                        },
                        {
                          id: 27178596,
                          created_at: "2021-05-17T00:13:24.000Z",
                          author: "rtpg",
                          text: "<p>Drag n drop UIs don&#x27;t really help when you have too much dynamism (like &quot;oh only have this button appear in these conditions&quot;, &quot;do this here&quot;, etc). And I would say that box layout offered by CSS is much nicer than the constraint layout system _when you have a lot of dynamism_.</p><p>Like I wouldn&#x27;t want to have to deal with an interfrace like facebook in native stuff. I don&#x27;t think it&#x27;s impossible, but I feel like it would require a lot more up-front design and correct engineering.</p><p>You&#x27;re right about XML being a medium, just kinda my memories of working with this stuff.</p>",
                          children: [
                            {
                              id: 27184056,
                              created_at: "2021-05-17T14:47:45.000Z",
                              author: "kaba0",
                              text: "<p>&gt; Drag n drop UIs don&#x27;t really help when you have too much dynamism</p><p>Yeah, its true — though you can leave an area empty where you will dynamically load one from a set of already drag’n’drop created layouts.</p>",
                              children: [],
                            },
                          ],
                        },
                        {
                          id: 27182185,
                          created_at: "2021-05-17T11:13:25.000Z",
                          author: "hnbad",
                          text: "<p>&gt; Like, how many lines of code does the most basic vbox&#x2F;hbox thing requires in web technology?</p><p>CSS:</p><p><pre><code>    .vbox, .hbox { display: flex }\n    .vbox { flex-direction: column }\n    .vbox &gt; *, .hbox &gt; * { flex-grow: 1 }\n</code></pre>\nHTML:</p><p><pre><code>    &lt;div class=&quot;hbox&quot;&gt;\n      &lt;div class=&quot;vbox&quot;&gt;\n        &lt;button&gt;Top left&lt;&#x2F;button&gt;\n        &lt;button&gt;Bottom left&lt;&#x2F;button&gt;\n      &lt;&#x2F;div&gt;\n      &lt;div class=&quot;vbox&quot;&gt;\n        &lt;button&gt;Top right&lt;&#x2F;button&gt;\n        &lt;button&gt;Bottom right&lt;&#x2F;button&gt;\n      &lt;&#x2F;div&gt;\n    &lt;&#x2F;div&gt;\n</code></pre>\nOr was that a rhetorical question?</p>",
                          children: [],
                        },
                        {
                          id: 27172984,
                          created_at: "2021-05-16T11:43:10.000Z",
                          author: "friend-monoid",
                          text: "<p>I&#x27;m not sure I buy the idea that &quot;efficient and easy tooling around a technology makes the technology&quot;. We all went through the same Dreamweaver pains.</p>",
                          children: [
                            {
                              id: 27173068,
                              created_at: "2021-05-16T11:59:29.000Z",
                              author: "kaba0",
                              text: "<p>How come the minuscule userbase of native frameworks have better tooling than the numero uno popular web? It may mean that there is a technical reason in the background.</p>",
                              children: [
                                {
                                  id: 27181210,
                                  created_at: "2021-05-17T08:28:46.000Z",
                                  author: "pmontra",
                                  text: "<p>30+ years of history?</p>",
                                  children: [
                                    {
                                      id: 27184112,
                                      created_at: "2021-05-17T14:51:42.000Z",
                                      author: "kaba0",
                                      text: "<p>Interestingly enough JavaFX is much younger than the web, and is quite niche, yet it has SceneBuilder.</p>",
                                      children: [
                                        {
                                          id: 27187049,
                                          created_at:
                                            "2021-05-17T19:07:15.000Z",
                                          author: "pmontra",
                                          text: '<p>It&#x27;s younger than the web but much older than the current bunch of frontend technologies. JavaFx is from 2008 [1]</p><p>Anyway, that&#x27;s not very important.</p><p>What web apps never had is a visual app builder as popular as the first Visual Basic for Windows 3. We had some tools like that (example Jwt [2]) but none of them got a critical mass of users. Maybe it&#x27;s difficult to match Visual Basic&#x27;s success because Microsoft controlled the tool, the operating system and the language. If this is the case the only current candidate is Google, because of Chrome. They are investing on Flutter and Dart now but making them prosper on the web looks like a uphill battle. Much easier on Android.</p><p>[1] <a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;JavaFX" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;JavaFX</a></p><p>[2] <a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;JWt_(Java_web_toolkit)" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;JWt_(Java_web_toolkit)</a></p>',
                                          children: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  id: 27173597,
                                  created_at: "2021-05-16T13:33:21.000Z",
                                  author: "goto11",
                                  text: "<p>They solve a simpler and more constrained problem which makes it easier to make tools. Something like Windows Forms are basically WYSIWYG - you drop some controls on a canvas and now you have a GUI. But the GUI will not gracefully adapt to different screen dimension from large monitors to mobile.</p>",
                                  children: [
                                    {
                                      id: 27176969,
                                      created_at: "2021-05-16T20:59:08.000Z",
                                      author: "pseudalopex",
                                      text: "<p>Native frameworks support flexible and resolution dependent layouts too.</p>",
                                      children: [],
                                    },
                                    {
                                      id: 27177602,
                                      created_at: "2021-05-16T22:25:32.000Z",
                                      author: "kaba0",
                                      text: "<p>Responsive layouting is an orthogonal problem.</p>",
                                      children: [
                                        {
                                          id: 27181681,
                                          created_at:
                                            "2021-05-17T09:54:09.000Z",
                                          author: "goto11",
                                          text: "<p>Orthogonal to what?</p>",
                                          children: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 27172071,
                          created_at: "2021-05-16T08:13:33.000Z",
                          author: "ath92",
                          text: "<p>That example you mentioned would be just a couple of lines of html with css (which you could inline if you wanted), and there are plenty of drag and drop tools for the web (WebFlow is a modern example, but they have been around for decades).</p>",
                          children: [
                            {
                              id: 27172257,
                              created_at: "2021-05-16T08:50:48.000Z",
                              author: "kaba0",
                              text: "<p>Why would it need any sort of CSS? Isn’t HTML supposed to be responsible for the structure of a webpage? And of course it can be done, but if we do something like hbox inside a vbox inside a vbox, the resulting code will be ugly as hell (perhaps Webcomponents will help a bit here?). Like, what is the point of HTML at that point? To spam divs (pun sort of intended)?</p><p>And there are plenty of other “layouting primitives”, all of which are quite cumbersome. And due to HTML encoding some form of semantic meaning only (though seldom used even for that), drag n drop tools can’t generate easy to read&#x2F;modify output. Also, without js frameworks, you can’t really just embed another component into it trivially.</p><p>And I’m not trying to shit on web tech, JS has absolutely overcome its shitty past, and is quite a likable language nowadays, and CSS is an extremely powerful and expressive system (though this latter is due in part to how shitty html is). My only gripe is with HTML that is simply not fit for the task (as it was never meant for that).</p>",
                              children: [
                                {
                                  id: 27172282,
                                  created_at: "2021-05-16T08:55:10.000Z",
                                  author: "yoz-y",
                                  text: "<p>&gt; Isn’t HTML supposed to be responsible for the structure of a webpage?</p><p>If by structure you mean things like hbox&#x2F;vbox then no, html is not supposed to do that. HTML should only represent the semantic structure.</p>",
                                  children: [
                                    {
                                      id: 27172301,
                                      created_at: "2021-05-16T08:59:59.000Z",
                                      author: "kaba0",
                                      text: "<p>Yeah I know, but that is because it was meant for documents. It is not a great fit for web applications.</p>",
                                      children: [
                                        {
                                          id: 27172507,
                                          created_at:
                                            "2021-05-16T09:50:01.000Z",
                                          author: "eurasiantiger",
                                          text: "<p>What is a better fit for web applications?</p>",
                                          children: [
                                            {
                                              id: 27172592,
                                              created_at:
                                                "2021-05-16T10:12:39.000Z",
                                              author: "kaba0",
                                              text: "<p>Nothing, because web applications are by definition html css js. Though canvas-based solutions can circumvent the layouting problem, but at the price of reinventing everything in a non-standard way.</p>",
                                              children: [
                                                {
                                                  id: 27172774,
                                                  created_at:
                                                    "2021-05-16T10:55:22.000Z",
                                                  author: "onethought",
                                                  text: "<p>The layout problem isn’t css... it’s the user platform is anything from a tiny vertical screen to a giant horizontal one.</p><p>Swing, Qt, et al do not have great answers to this problem, and definitely not superior ones than css.</p>",
                                                  children: [
                                                    {
                                                      id: 27174721,
                                                      created_at:
                                                        "2021-05-16T16:23:48.000Z",
                                                      author: "mpfundstein",
                                                      text: "<p>qml is quite awesome. hands down! its a joy to work with.</p><p>but I agree in general with your statement.</p>",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          id: 27175090,
                                          created_at:
                                            "2021-05-16T17:03:36.000Z",
                                          author: "danShumway",
                                          text: "<p>Applications aren&#x27;t special.</p><p>There are a couple of exceptions for interfaces that are genuinely unconventional, or that deal with multiple spacial dimensions, or that are primarily representing graphs and visual&#x2F;audio data. But most interfaces should be representable in pure text.</p><p>This argument that &quot;the web is only for documents&quot; is missing the point that <i>most</i> applications are just interactive documents when you really break down their UI. A labeled tree is a fine way to represent user-facing state for most apps, and most apps would benefit from exposing a more semantic interface to users that was easier for them to manipulate and read programmatically.</p>",
                                          children: [],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 27172556,
                      created_at: "2021-05-16T10:00:29.000Z",
                      author: "kwanbix",
                      text: "<p>I imagine you never used Delphi, VB, or even Lazarus?</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 27171391,
                  created_at: "2021-05-16T05:14:59.000Z",
                  author: "VWWHFSfQ",
                  text: "<p>I feel like I&#x27;m a freaking alien right now.</p>",
                  children: [],
                },
                {
                  id: 27171454,
                  created_at: "2021-05-16T05:36:55.000Z",
                  author: "mssundaram",
                  text: "<p>Probably in contrast to the embedded hardware development the OP does...</p>",
                  children: [],
                },
                {
                  id: 27170961,
                  created_at: "2021-05-16T03:30:03.000Z",
                  author: "zodiakzz",
                  text: "<p>I am a senior web developer with 12 years of experience, also perplexed by that statement.</p><p>Edit: The React repo is 3 million+ lines of code, written in its own niche language...</p>",
                  children: [
                    {
                      id: 27171888,
                      created_at: "2021-05-16T07:24:54.000Z",
                      author: "brundolf",
                      text: "<p>There are different definitions of &quot;simplicity&quot;. The entire stack top to bottom may not be simple, but if the developer experience is simple (which it can often be on the web- that&#x27;s a major driver of the web&#x27;s prevalence as a platform), that can be what matters.</p><p>I have a theory that the people who go on about how the web ecosystem is too complicated are either 1) web developers who are nostalgic for the jQuery days (and have selective memories about those days), or 2) non-GUI developers who enjoy the theoretical virtues of a QT or a GTK but have never actually had to work on a complex GUI, and so can&#x27;t appreciate the incredible benefits the web has over those other platforms.</p>",
                      children: [
                        {
                          id: 27180455,
                          created_at: "2021-05-17T05:57:36.000Z",
                          author: "kwanbix",
                          text: "<p>Maybe you are too young, but there was a time were we used RADs (Rapid Application Development) environments like Delphi, VisualBasic, Visual C++, etc. Those solutions which are from 1990s, are still years ahead in simplicity vs what you need to do to build a full web solution today (front-end and backend). Of course the web has many other benefits, like 0 install, runs everywhere, always updated, etc., but calling web development simple is just crazy in my humble opinion.</p>",
                          children: [],
                        },
                        {
                          id: 27172047,
                          created_at: "2021-05-16T08:08:45.000Z",
                          author: "kaba0",
                          text: "<p>What are the incredible benefits of the web? Have <i>you</i> worked on a complex QT app?</p>",
                          children: [
                            {
                              id: 27174238,
                              created_at: "2021-05-16T15:13:32.000Z",
                              author: "subw00f",
                              text: "<p>I have worked with both, including Widgets and Quick. I wonder why you think Qtcom is focusing development on Quick, which uses QML (JSON-like syntax) and JavaScript (ES6), while declaring Widgets &quot;feature complete&quot;, mostly releasing minor fixes, in other words, keeping it stagnated. The obvious answer for me without getting into Mobile vs Desktop development is: it&#x27;s easier to get new professionals to use technology as popular as JS (or any other web related stuff), and definitely cheaper for companies to hire said professionals, therefore making it a easier pick for new projects. To summarize the benefits: easier for junior devs to use and because of that overall cheaper&#x2F;faster deliveries. Note that I&#x27;m not saying anything about quality.</p>",
                              children: [
                                {
                                  id: 27176760,
                                  created_at: "2021-05-16T20:29:08.000Z",
                                  author: "pseudalopex",
                                  text: "<p>Junior developer doesn&#x27;t mean a developer who just knows JavaScript. Cheaper developers doesn&#x27;t mean faster or cheaper delivery in the long run. And I don&#x27;t think brundolf meant cheaper developers.</p>",
                                  children: [],
                                },
                              ],
                            },
                            {
                              id: 27172514,
                              created_at: "2021-05-16T09:51:45.000Z",
                              author: "eurasiantiger",
                              text: "<p>I have seen a LOT of Qt apps and 100% of them had worse UI than your average web app.</p>",
                              children: [
                                {
                                  id: 27176785,
                                  created_at: "2021-05-16T20:32:50.000Z",
                                  author: "pseudalopex",
                                  text: "<p>I&#x27;ve seen lots of Qt apps. Most of them have been much better than the average web app.</p>",
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 27174202,
                      created_at: "2021-05-16T15:07:22.000Z",
                      author: "11235813213455",
                      text: "<p>while preact is 3kb and does the same</p>",
                      children: [
                        {
                          id: 27174735,
                          created_at: "2021-05-16T16:24:58.000Z",
                          author: "mpfundstein",
                          text: "<p>it does not do the same. it does few things that react does and thats it. what an ignorant comment</p>",
                          children: [
                            {
                              id: 27175871,
                              created_at: "2021-05-16T18:28:22.000Z",
                              author: "11235813213455",
                              text: '<p>There&#x27;s preact&#x2F;compat sub-module for the remaining react features, please inform yourself before inappropriately flaming someone. There some very slight differences <a href="https:&#x2F;&#x2F;preactjs.com&#x2F;guide&#x2F;v8&#x2F;differences-to-react&#x2F;#what-s-missing" rel="nofollow">https:&#x2F;&#x2F;preactjs.com&#x2F;guide&#x2F;v8&#x2F;differences-to-react&#x2F;#what-s-m...</a> nothing blocking at all</p>',
                              children: [
                                {
                                  id: 27180051,
                                  created_at: "2021-05-17T04:29:33.000Z",
                                  author: "59nadir",
                                  text: "<p>Does it have hooks? Class components are super tedious in comparison.</p>",
                                  children: [
                                    {
                                      id: 27181326,
                                      created_at: "2021-05-17T08:48:11.000Z",
                                      author: "11235813213455",
                                      text: '<p>`import { useState } from &#x27;preact&#x2F;hooks&#x27;;` yes <a href="https:&#x2F;&#x2F;preactjs.com&#x2F;guide&#x2F;v10&#x2F;hooks" rel="nofollow">https:&#x2F;&#x2F;preactjs.com&#x2F;guide&#x2F;v10&#x2F;hooks</a></p>',
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 27171938,
                      created_at: "2021-05-16T07:37:31.000Z",
                      author: "ramchip",
                      text: '<p>Where do you get that figure from? I&#x27;m looking at the add&#x2F;delete statistics for instance:</p><p><a href="https:&#x2F;&#x2F;github.com&#x2F;facebook&#x2F;react&#x2F;graphs&#x2F;contributors" rel="nofollow">https:&#x2F;&#x2F;github.com&#x2F;facebook&#x2F;react&#x2F;graphs&#x2F;contributors</a></p><p>It doesn&#x27;t seem possible for this to add up to 3M lines of code?</p>',
                      children: [
                        {
                          id: 27172803,
                          created_at: "2021-05-16T11:03:48.000Z",
                          author: "shakow",
                          text: "<p>Indeed, tokei gives me ~400 000 lines, including ~310 000 LoC.</p>",
                          children: [],
                        },
                      ],
                    },
                    {
                      id: 27171513,
                      created_at: "2021-05-16T05:54:35.000Z",
                      author: "uryga",
                      text: "<p>what niche language?</p>",
                      children: [
                        {
                          id: 27171561,
                          created_at: "2021-05-16T06:06:23.000Z",
                          author: "vgel",
                          text: "<p>Flow</p>",
                          children: [
                            {
                              id: 27172694,
                              created_at: "2021-05-16T10:38:26.000Z",
                              author: "egeozcan",
                              text: "<p>I find it interesting (and, a bit funny, tbh) how flow became a niche language. This is the difference investing in tooling makes, folks.</p>",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 27176182,
                      created_at: "2021-05-16T19:16:15.000Z",
                      author: "buchanaf",
                      text: "<p>It&#x27;s a monorepo, so the only package you are really interested in is &#x27;packages&#x2F;react-dom&#x27;, which I&#x27;m guessing is less than 3 million.</p>",
                      children: [],
                    },
                    {
                      id: 27174393,
                      created_at: "2021-05-16T15:41:33.000Z",
                      author: "spookthesunset",
                      text: "<p>In my 20 years as a developer I’ve learned that the more polished something looks on the surface, the more complex the codebase under the hood becomes. Things are simple to the end user because of all that complexity.</p>",
                      children: [
                        {
                          id: 27191891,
                          created_at: "2021-05-18T06:50:51.000Z",
                          author: "cryptos",
                          text: "<p>That is my experience, too. I worked on a SPA with a more or less simple looking table that presented hierarchical data and made them editable with form elements. Under the hood there were hundred lines of very dense rxjs code and the whole thing was communicating with about 10 HTTP endpoints. But it looked simple.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 27171019,
                  created_at: "2021-05-16T03:42:09.000Z",
                  author: "irrational",
                  text: "<p>Seriously. I’ve been doing web development professionally since 1998. I’d love to have OP write a blog post to teach the rest of us about this simplicity.</p>",
                  children: [
                    {
                      id: 27171315,
                      created_at: "2021-05-16T04:52:48.000Z",
                      author: "adventured",
                      text: "<p>I&#x27;ve also been doing web development on essentially a daily basis since the 1990s.</p><p>I got pretty tired of chasing the fad explosion. Here&#x27;s what I build everything with these days:</p><p>HTML, CSS, JavaScript, Go or PHP, Redis, MySQL or Postgres, Ubuntu &amp; Nginx. Occasionally I&#x27;ll make use of an ancient version of Sphinx for easy, fast search. I also sometimes mess with Vue for fun, as I happen to be fond of it, but I never find that I need it.</p><p>No frameworks. No containers. It&#x27;s all mostly boring and ancient. I use DigitalOcean for about 95% of everything hosting wise (and rarely AWS). Works beautifully, everything is simple, blazing fast, light on bloat and rock solid.</p><p>The simplicity is still out there, if you don&#x27;t have to care about what anybody else thinks, if you&#x27;re not trying to earn a living doing web development (everything I work on is self-determined). That&#x27;s a big if unfortunately. If you are trying to earn a living doing web development it&#x27;s understood that chasing the latest thing isn&#x27;t optional, as you can&#x27;t afford to miss an inflection.</p>",
                      children: [
                        {
                          id: 27171497,
                          created_at: "2021-05-16T05:47:47.000Z",
                          author: "QuadrupleA",
                          text: "<p>Definitely agree with this type of approach - and my experience as a freelancer (thankfully in charge of my tech stacks) is that clients are happy to pay for fast, reliable software built like this.</p>",
                          children: [
                            {
                              id: 27171977,
                              created_at: "2021-05-16T07:50:51.000Z",
                              author: "cies",
                              text: "<p>Software that does not have a one-man-team behind it (with all due risks): that&#x27;s where bigger companies pay even better.</p>",
                              children: [],
                            },
                          ],
                        },
                        {
                          id: 27171515,
                          created_at: "2021-05-16T05:55:53.000Z",
                          author: "theonething",
                          text: "<p>Do you roll your auth and stuff?</p>",
                          children: [
                            {
                              id: 27172205,
                              created_at: "2021-05-16T08:40:18.000Z",
                              author: "adventured",
                              text: "<p>I started building my own auth about 20 years ago and I&#x27;ve been learning and rolling (improving it) as I go. I&#x27;ve been using a structure that I&#x27;ve been iterating for about the past 6-8 years or so. Hardly a week has gone by that I haven&#x27;t worked on something related to auth.</p><p>I&#x27;ve experimented with just about every approach. Lately I&#x27;ve dumped all forms of social auth (the past couple of years). I won&#x27;t allow FB or Twitter login, none of them deserve to be trusted with that.</p><p>I&#x27;m a big fan of try (the service) before you have to sign up, but I always find that among the most challenging aspects to get right.</p><p>I know everyone has a different opinion on auth, but I find it routine to do after all this time. The part I find most annoying is probably throttling &#x2F; controlling abuse attempts vs legitimate users (balancing it well), it&#x27;s tedious.</p>",
                              children: [],
                            },
                            {
                              id: 27171706,
                              created_at: "2021-05-16T06:42:03.000Z",
                              author: "archerx",
                              text: "<p>I made a custom e-commerce from scratch with PHP and doing the auth system wasn’t hard at all and it is pretty secure. I feel people make auth seem scarier than it really is.</p>",
                              children: [
                                {
                                  id: 27182414,
                                  created_at: "2021-05-17T11:49:49.000Z",
                                  author: "scrollaway",
                                  text: "<p>&gt; <i>the auth system wasn’t hard at all and it is pretty secure</i></p><p>If there ever was a red flag in what you&#x27;re saying, this is it.</p><p>Auth isn&#x27;t &quot;scary&quot;. But it <i>is</i> hard. You need to know what you&#x27;re doing in order to implement it from scratch. If you think it wasn&#x27;t hard, odds are you did it wrong.</p>",
                                  children: [],
                                },
                                {
                                  id: 27173989,
                                  created_at: "2021-05-16T14:34:49.000Z",
                                  author: "atatatat",
                                  text: "<p>&gt; PHP</p><p>&gt; pretty secure</p><p>Are you the admin of Demonoid?</p>",
                                  children: [],
                                },
                                {
                                  id: 27171834,
                                  created_at: "2021-05-16T07:10:18.000Z",
                                  author: "petewailes",
                                  text: "<p>Don&#x27;t roll your own auth.</p><p>I seriously doubt you&#x27;re going to do a better job at security than the AaaS systems out there. I couldn&#x27;t, and no-one I know could. It&#x27;s a ludicrously complex and subtle field.</p>",
                                  children: [
                                    {
                                      id: 27182136,
                                      created_at: "2021-05-17T11:06:12.000Z",
                                      author: "dvdkon",
                                      text: "<p>How did you evaluate the auth implementations? In my experience it&#x27;s about as hard to poke holes into something as it is to fix it. Besides, a custom auth implementation doesn&#x27;t need to be best-in-class, it needs to just be good enough.</p>",
                                      children: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 27171553,
                          created_at: "2021-05-16T06:04:27.000Z",
                          author: "taotau",
                          text: "<p>What sort of systems are you building ? I’m guessing some variation of CMS, shopping cart or simple crud backoffice reporting systems.</p><p>I’ve spent 14 years working for a small agency building these sorts of systems. I kept up with all the cool new stuff that’s come out and played with it but all we ever needed was 2 load balanced app servers with a single instance Postgres database and we ran some pretty chunky systems.</p><p>I’m now looking for a new position and this attitude has come up to bite me. I’ve always been dismissive of the new dangled complexity but turns out there are systems out there that churn through so much data that mongodb makes sense, and large teams of devs where splitting systems into separate services and writing reusable components is required which is where frameworks and inter process communication tools come in.</p><p>Most things exist because there is a need for them.</p>",
                          children: [
                            {
                              id: 27173904,
                              created_at: "2021-05-16T14:23:28.000Z",
                              author: "javajosh",
                              text: '<p>Taotau my aesthetic is similar to yours, but it&#x27;s true that we are a minority. Devs are, as a group, perceived as technology maximalists that love new toys, and the truth of the perception is reflected in the software landscape. Libraries like Angular, RxJs, and Webpack are all packed to the gills with features! It&#x27;s also reflected by all the &quot;slightly better&quot; options we get in our tooling (yarn v npm) and (scss v css) and (ts v js) and even (ts v es)lint. But without exception, all of those incremental improvements <i>still</i> require that you have <i>total mastery of the browser&#x27;s native runtime</i>, html5 + css3 + ES6 + dom + async, and all the protocols it enables, HTTP, TCP&#x2F;IP, DNS, and all the infrastructure that&#x27;s grown around it all (CDNs and load balancers and hypervisors).</p><p>Devops is in a similar state! There is growing consensus that &quot;Container orchestration&quot; is something like the right problem to solve, and people seem to like Kubernetes, but tools like Puppet, Ansible, Salt are still in heavy usage, and are still very useful, but they solve a different problem. Even within k8s there is debate about the proper container runtime (Docker has fallen out of favor for containerd). But all of this assumes <i>total mastery of linux, ssh, bash, systemd, vim, sudo, mount, ps, and all the distribution variations</i>.</p><p>Java is in a similar state! Widely considered &quot;boring technology&quot;, Java (lang) 8 introduced streams and lamdas, which is a very different way to code (and hence, to think), and emphasizes functional style over object-oriented programming. Then you get to pick which Java you want (Oracle, RedHat, ?), and how you want it installed (installer, brew, unzip, docker), and now your build tool (Maven, gradle, play, ?) Then if you&#x27;re making a &quot;typical&quot; webapp you have to choose your VCS (git, mercurial, svn, cvs), code hosting provider (github, gitlab), your starting point - Spring, Spring Boot, Dropwizard - which assumes you want REST, when in fact you may want to try GraphQL, which may lead you to nodejs, and <i>it&#x27;s</i> complexity.</p><p>Picking system dependencies is similarly complicated. Components we can choose from - message queues (rabbitmq, kafka, activemq, ?), caches, proxies (nginx, httpd), and here we have to balance many considerations, such as &quot;is there a widely trusted image I can configure and use as is?&quot;, and your options, and the details used to deploy them, will depend on every other decision you&#x27;ve made. In fact, all of these choices are made in away that affects some or all of the others, in a way that is complex and difficult to articulate. This is certainly why certain combinations get acronyms (LAMP, Jamstack, etc[0]), and why its very hard to have an intuitive picture.</p><p>[0] <a href="https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Solution_stack" rel="nofollow">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Solution_stack</a></p>',
                              children: [
                                {
                                  id: 27176636,
                                  created_at: "2021-05-16T20:12:19.000Z",
                                  author: "einpoklum",
                                  text: "<p>&gt; Devs are, as a group, perceived as technology maximalists that love new toys,</p><p>Make that web devs, if at all. In many other places where software is written, it&#x27;s closer to the opposite: Managers tend to be minimalists, and the more &quot;adventurous&quot; developers lobby for adopting newer libraries, or use a new language for some side-project.</p>",
                                  children: [],
                                },
                              ],
                            },
                            {
                              id: 27172158,
                              created_at: "2021-05-16T08:31:57.000Z",
                              author: "adventured",
                              text: "<p>The last thing I built was a CMS structurally (a new non-commercial knowledge service), took about ~18 months to build. I plan to work on it for the rest of this decade approximately.</p><p>Currently working on a couple of trading systems (for physical objects, not financial). That&#x27;s in the ecommerce sphere technically, although they&#x27;re not monetary transaction based. The first one will hopefully launch in June. I might Show HN it.</p><p>Both work perfectly with the setup I described. I build in my wheelhouse though. I can build services like Stack Exchange, Quora, Wikipedia or Reddit (or most things in standard ecommerce, ecommerce platforms). I know what my stack is good at, and what it&#x27;s not appropriate for. And at this point in my life I know well what I&#x27;m good at and what I enjoy, so I look for opportunities there.</p>",
                              children: [],
                            },
                            {
                              id: 27172710,
                              created_at: "2021-05-16T10:41:22.000Z",
                              author: "egeozcan",
                              text: "<p>&gt; so much data that mongodb makes sense</p><p>I don&#x27;t want to dismiss this without any arguments but please do the basic research before you choose the db for your next project.</p>",
                              children: [
                                {
                                  id: 27179945,
                                  created_at: "2021-05-17T04:02:25.000Z",
                                  author: "swagasaurus-rex",
                                  text: '<p>Parent is probably referring to how MongoDB has consistency issues and isn&#x27;t recommended by third party testers like Jepsen.</p><p><a href="https:&#x2F;&#x2F;www.infoq.com&#x2F;news&#x2F;2020&#x2F;05&#x2F;Jepsen-MongoDB-4-2-6&#x2F;" rel="nofollow">https:&#x2F;&#x2F;www.infoq.com&#x2F;news&#x2F;2020&#x2F;05&#x2F;Jepsen-MongoDB-4-2-6&#x2F;</a></p>',
                                  children: [
                                    {
                                      id: 27181244,
                                      created_at: "2021-05-17T08:35:03.000Z",
                                      author: "sepin4",
                                      text: "<p>MongoDB IMHO also has resource allocation issues, because for a simple two &quot;node&quot; distribution setup you have ~4 times the demand for resources than a &quot;regular&quot; clustered service like Postgre or Oracle. Added to that the actual promised efficiency relies heavy on the data model and has no real easy way to correct once deployed.</p>",
                                      children: [
                                        {
                                          id: 27182972,
                                          created_at:
                                            "2021-05-17T13:10:24.000Z",
                                          author: "jd_mongodb",
                                          text: "<p>How do you get four times the demand for resources from two nodes?</p><p>The &quot;promised efficiency&quot; of any system is a complex question. The dynamic schema approach of MongoDB makes it trivial to update schema design on the fly so I am confused by &quot;no real easy way to correct once deployed&quot;.</p><p>BTW : The recommended production setup is three nodes (one primary, two secondaries). This is what you get by default in MongoDB Atlas (you can&#x27;t go smaller).</p><p>(I work for MongoDB)</p>",
                                          children: [
                                            {
                                              id: 27188259,
                                              created_at:
                                                "2021-05-17T20:48:06.000Z",
                                              author: "sepin4",
                                              text: "<p>I was talking about a two &quot;node&quot; Mongo setup which would mirror the capabilities of a classic two node setup of Oracle RAC for example. Since in Mongo this is not a clear 1:1 match due to a different model of operation, in order to get the same performance&#x2F;continuity as RAC here is what I mean.</p><p>If I want to gain a relative 100% increase in concurrent read&#x2F;write access and transparent session failover to my application I have to procure two servers(with roughly the same performance lets put it at rawPerf=1.0 for simplicity) and a SAN&#x2F;NAS with SCSI HBA and that would be it. All the necessary components will be running on those two servers and the application will have access to almost all capabilities of a single instance with a roughly twice the performance and fault tolerance. To do that in Mongo, I would have to procure 2 replica sets with 3 instances each(bare minimum to get the fault tolerance and not use arbiters which according to Mongo University is a bad idea) for the actual data and another RS for the configuration meta-data, which is another 3 instances. I will also need instances where I can run my &quot;mongos&quot; to route&#x2F;consolidate my requests and to have fault tolerance I will need at least two of those. Now to do a break down of the different instances. From the two replica sets for data, I can use only 2 of the instances for writes and the remaining four only for consistent reads and that is only with the appropriate write concern. And while I have two instances for writes I am not guaranteed to get a consistent increase in write operations unless the data is at least somewhat evenly distributed. I will need six rawPerf 0.5 servers(assuming 0.5 rawPerf is capable to handle roughly half the data), that is a total of 3.0 so far. The configuration RS while not as demanding as the actual data RS will still require resources so I count it as roughly between 0.5-1.0 total for all three instances. And finally I have the &quot;mongos&quot; instances which although will not need disk space will need some CPU and the same amount of RAM as a regular instance in case the queries and not optimized, so I will have to give it 0.5 per instance. And the total amount of resources comes to 3.0+0.5+1.0=4.5. On the other hand with the Oracle RAC I would&#x27;ve needed 2.0.</p><p>As for the schema flexibility, from the Mongo documentation I take it that once the shard key is created it can&#x27;t be changed arbitrarily. It can only be further fine-grained by adding more keys to it, however this is available from version 4.4. In order to change it cardinally, I would have to recreate the collection.</p><p>I&#x27;m sure you are well aware of all this, however I&#x27;m just stating my experience with MongoDB so far.</p>",
                                              children: [
                                                {
                                                  id: 27193757,
                                                  created_at:
                                                    "2021-05-18T12:36:53.000Z",
                                                  author: "jd_mongodb",
                                                  text: "<p>AH I see. When we talk about nodes in MongoDB they are the elements of a replica set. That is what confused me. Yes, you are right, to get the equivalent performance of a two node database server you would have to run a sharded cluster with two shards. That is definitely more nodes than the two node design you have outlined for the RAC like design.</p><p>I am not familiar with Oracle RAC architecture but casual mention of a SAN fails to recognise the cost and complexity of even the smallest SAN. On the other hand MongoDB can run on dumb disks without a SAN or RAID required (though RAID can help with performance).</p><p>With you two node system loss of a node results in a 50% loss in performance whereas with MongoDB loss of a node will result in a secondary taking over the primary role with no loss in performance. You get what you pay for.</p><p>Setting up such clusters used to be a PITA until the advent of MongoDB Atlas. Now you can set them up with a few mouse clicks.</p><p>As regards shard keys. Yes, they are immutable, but the documents they index are not. So dynamic schema properties are preserved in a sharded cluster.</p>",
                                                  children: [
                                                    {
                                                      id: 27206295,
                                                      created_at:
                                                        "2021-05-19T09:26:31.000Z",
                                                      author: "sepin4",
                                                      text: "<p>While a SAN&#x2F;NAS is overall an expensive hardware in both price and manageability, there are entry level devices. You can even get direct SCSI devices in some cloud services(Azure has &quot;shared disks&quot;). For Oracle RAC the data is accessed from same location, it&#x27;s not distributed&#x2F;replicated across nodes. It&#x27;s literally the same disks attached to all nodes. Also ASM works with raw block devices which bypasses the need for file system abstraction and all the latency that comes with it. You could also deploy a cluster on a cluster&#x2F;network file system, but this would generally not be a good idea since you get a lot of overhead.</p><p>Postgre clusters can be configured in similar fashion.</p><p>I&#x27;m not saying that Mongo doesn&#x27;t have it&#x27;s strengths. However using the full potential of your environment requires much more planing and has a lot more pitfalls.</p><p>I was particularly discussing the implications on what the relative immutability of the shard key has on the data distribution and that it is not that easy to change.</p>",
                                                      children: [],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: 27172834,
                          created_at: "2021-05-16T11:09:08.000Z",
                          author: "fitpolar",
                          text: "<p>&gt; HTML, CSS, JavaScript, Go or PHP, Redis, MySQL or Postgres, Ubuntu &amp; Nginx.</p><p>Listing a stack of dependencies as a starting requirement is arguably not simple.</p><p>Simple to you personally because you’re proficient in each of these. But how long did it take for you to become proficient?</p>",
                          children: [
                            {
                              id: 27176267,
                              created_at: "2021-05-16T19:26:38.000Z",
                              author: "adventured",
                              text: "<p>The premise isn&#x27;t that what I&#x27;m using will make it easy for somebody with zero knowledge to become good at web development in 24 hours or a week or a month, or any such pitch. It&#x27;s certainly relative.</p><p>The relative simplicity is in that the stack is quite set and restricted, with no unnecessary pieces. I don&#x27;t add to it just because the industry finds a new flavor of the week or something loses&#x2F;gains popularity. Each part of the stack has a job to do and I don&#x27;t add to it constantly or constantly turn over what&#x27;s in it. That stack could remain entirely unchanged for five or more years easily. Where it can be avoided I don&#x27;t use unnecessary incrementals that add dependencies or complexity (which will often resurface in the loss of reliability&#x2F;predictability). I often don&#x27;t use the latest versions of anything unless there&#x27;s a very good reason to switch sooner than later. I might stick with Ubuntu 16.04 or 18.04 for the next decade if it were a safe thing to do from a security perspective. In that approach, I can place as much of my energy and focus on what I&#x27;m building as possible (since everything I build is mine, that&#x27;s where my priority and interest is).</p><p>Web development was always a means to an end for me. It enables me to build things that I want to see exist. I don&#x27;t love web development unto itself (I&#x27;m rather neutral on it), I love what it enables me to do. I grew up in the middle of nowhere Appalachia. An atheist, social liberal in a typical conservative region that was intellectually unfulfilling, uninspiring, non-ambitious, slow (it was also peaceful, green, and with very little crime). The Internet (and Web) showed up there around 1993-1994 and it was like something from another planet, my teenaged brain could see immediately what could be done with the open canvas and from then forward all I wanted to do was build on it. You&#x27;re telling me there&#x27;s this always expanding virtual space, seemingly infinite, and I can just build, and build, and build anything that I can think of? And it connects me up to millions (later billions) of other people? And it&#x27;s not even very expensive to mess with? Holy shit, let&#x27;s go.</p><p>So what I primarily care about is the thing being constructed, and I want my stack to be very reliable, fast and without many frills or unnecessary complexities. I don&#x27;t want it to get in the way. I don&#x27;t want to have to fight with it every time I begin a new project, I want to immediately get to building, with the stack being the &#x27;ol reliable companion that just does its job.</p><p>If there&#x27;s something far better nearby (that is reliable + low on complexity) with minimal learning curve, I&#x27;ll consider it; I switched to PHP 7 very rapidly for example because the speed increase was such a considerable gain and it required very little time&#x2F;effort to switch. I started utilizing Go because it was easy to learn, simple and fast (I worked with Java in the 1990s, and never wanted to go through that again); Redis is much the same story, I use it for all sorts of things (from caching to various throttling tasks) and it was pretty ridiculously easy to start using vs the enormous value I derive from it. I&#x27;d be happy to keep using my current version of Redis for the rest of this decade. I&#x27;ve been using Photoshop 7 since 2002 because it just works and handles ~95% of everything I need in that space (and they can&#x27;t do anything to force me to upgrade).</p><p>It&#x27;s also worth noting that I handle <i>every</i> aspect of building and operating a service in the beginning. So this adds emphasis on not shaking the stack unnecessarily, the time costs can become large fast.</p>",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 27172566,
                  created_at: "2021-05-16T10:02:56.000Z",
                  author: "z3t4",
                  text: "<p>Web development, even single page apps, and progressive web apps, can be simple if you skip the web frameworks which solve non-problems and complicate things. The most difficult problem in web development is to make the user interface (UX) work on everything from smart-watches to 40 inch 4k monitors. CSS solves this problem, but it&#x27;s not an easy problem by itself. The second most difficult thing in web development is automated testing across the stack, testing both back-end and front-end, with different user devices. It&#x27;s complicated and time consuming to write the code that test every function automatically. Third most difficult thing in web development is optimizations, the browser dev tools doesn&#x27;t say much about what is going on internally in the JavaScript engine.</p>",
                  children: [
                    {
                      id: 27176558,
                      created_at: "2021-05-16T20:03:30.000Z",
                      author: "pseudalopex",
                      text: "<p>Show me a user interface that works on anything from smart watches to 40 inch monitors.</p>",
                      children: [],
                    },
                    {
                      id: 27176655,
                      created_at: "2021-05-16T20:15:16.000Z",
                      author: "einpoklum",
                      text: "<p>&gt; CSS solves this problem</p><p>No, it does not.</p><p>CSS <i>allows</i> some <i>mitigation</i> of this problem.</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 27172578,
                  created_at: "2021-05-16T10:07:30.000Z",
                  author: "austincheney",
                  text: "<p>I was able to create an original OS like GUI, including file system interaction, using vanilla JS (TypeScript) in about two weeks. I am still using it. The actual GUI is just a couple files each comprising about a dozen functions, nothing really complicated.</p>",
                  children: [
                    {
                      id: 27180652,
                      created_at: "2021-05-17T06:44:11.000Z",
                      author: "mixmastamyk",
                      text: "<p>Delphi probably would have gotten you there in two hours.</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 27176678,
                  created_at: "2021-05-16T20:19:38.000Z",
                  author: "XCSme",
                  text: "<p>The nice part is that you can make web dev as simple or complex as you want. You can write your entire application in a single index.html file with no compilation or build step. You can also use various preprocessors, scaffolds, libraries and frameworks to achieve the same result. The choice is yours.</p>",
                  children: [],
                },
              ],
            },
            {
              id: 27168935,
              created_at: "2021-05-15T20:56:00.000Z",
              author: "fukmbas",
              text: "<p>Web tech is shit</p>",
              children: [],
            },
            {
              id: 27174568,
              created_at: "2021-05-16T16:03:37.000Z",
              author: "geodel",
              text: "<p>I hope this is sarcasm.</p>",
              children: [],
            },
            {
              id: 27171241,
              created_at: "2021-05-16T04:28:20.000Z",
              author: "neycoda",
              text: "<p>Web hooks are nothing new in other languages, they&#x27;re just built-in functions that do things that were previously cumbersome to code yourself. That&#x27;s only revolutionary to React. PHP is a great example of built-in functions, yet I&#x27;ve heard React fanboys complain that PHP has too many built-in functions (which is a really odd thing to complain about).</p>",
              children: [],
            },
            {
              id: 27171026,
              created_at: "2021-05-16T03:44:06.000Z",
              author: "rthomas6",
              text: "<p>I do embedded also, and FPGAs. Do you have any suggestions for how to start learning web stuff? Every time I try, I get overwhelmed by all the frameworks, libraries, package managers, build pipelines, etc. There doesn&#x27;t seem to be a set of best practices for what to do, or even what is needed and what isn&#x27;t. What is the best way to get started?</p>",
              children: [
                {
                  id: 27171148,
                  created_at: "2021-05-16T04:07:35.000Z",
                  author: "ffhhj",
                  text: "<p>Don&#x27;t bother with frameworks, write plain HTML+JS+CSS and use jQuery.</p>",
                  children: [
                    {
                      id: 27172114,
                      created_at: "2021-05-16T08:21:59.000Z",
                      author: "DrSiemer",
                      text: "<p>What exactly do you still use or need jQuery for?</p>",
                      children: [
                        {
                          id: 27173147,
                          created_at: "2021-05-16T12:15:45.000Z",
                          author: "PedroBatista",
                          text: "<p>I like the API.</p>",
                          children: [],
                        },
                        {
                          id: 27174270,
                          created_at: "2021-05-16T15:20:21.000Z",
                          author: "ffhhj",
                          text: "<p>It&#x27;s mostly a wrapper of JS functions that takes care of compatibility, and makes code more readable.</p>",
                          children: [
                            {
                              id: 27176076,
                              created_at: "2021-05-16T19:00:06.000Z",
                              author: "buchanaf",
                              text: "<p>Compatibility isn&#x27;t really a consideration nowadays.</p>",
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 27175602,
                      created_at: "2021-05-16T17:57:31.000Z",
                      author: "atatatat",
                      text: "<p>HTMX anyone?</p>",
                      children: [],
                    },
                    {
                      id: 27171253,
                      created_at: "2021-05-16T04:33:02.000Z",
                      author: "neycoda",
                      text: "<p>HTML then CSS then JavaScript. I&#x27;ve taught all three and people struggle more in a different order. HTML is the skeletal architecture, CSS is just styling, then JavaScript is behavior. Those three things in that order are like orders of &quot;need&quot;. You need HTML first to have a webpage structure, then styling to make it easy to understand its elements, then the behavior is more complex than both. I don&#x27;t know why I see people put JS learning before CSS... JS is much more complex than CSS, and a much different change in paradigm from HTML than CSS is.</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 27171155,
                  created_at: "2021-05-16T04:08:47.000Z",
                  author: "_pdp_",
                  text: "<p>Do you start learning FPGA programming by studying frameworks? I doubt. Like all other things you start learning the basics and then once you know them you can abstract complexities with frameworks. There is nothing overwhelming about web development. It is trivial.</p>",
                  children: [
                    {
                      id: 27171417,
                      created_at: "2021-05-16T05:20:52.000Z",
                      author: "lawik",
                      text: "<p>If someone says they get overwhelmed by something, chances are decent there is something overwhelming about it.</p><p>Web is a large domain of knowledge. It isn&#x27;t particularly hard in terms of math, algorithms or mysterious unknown proprietary APIs. But there is a lot to figure out. What parts are important, what parts can I skip.</p><p>If by basics you mean HTML, CSS and JS. Sure. Good start.\nBut you could also start with a framework and learn from the middle and out or the top down.</p><p>Not everything has to be learned bottom up.</p><p>Either way. It is not trivial.</p>",
                      children: [
                        {
                          id: 27171488,
                          created_at: "2021-05-16T05:45:00.000Z",
                          author: "_pdp_",
                          text: "<p>&gt; If someone says they get overwhelmed by something, chances are decent there is something overwhelming about it.</p><p>The numbers speak for themselves. I don&#x27;t need to convince you. There are more web developers than in any other programming field. So it must have some property that makes it easy to get started or at least some kind of incentive to make people go through the initial hurdle.</p><p>Anything worth studying is slightly overwhelming at first, but to say that everything continues to be overwhelming once you know the basics is wrong. Knowing a little bit of the grammar and some words will help you understand better Mandarine. Not knowing anything about the language will make it appear as some alien technology.</p><p>No skill starts growing at the middle. Nobody teaches mathematics by starting with abstract concepts. We don&#x27;t learn new spoken languages by studying literature from the get-go. So getting the pedagogics right is part of the success.</p>",
                          children: [],
                        },
                      ],
                    },
                    {
                      id: 27173530,
                      created_at: "2021-05-16T13:21:03.000Z",
                      author: "rthomas6",
                      text: "<p>Creating a CRUD website is supposed to be pretty fundamental, right? And how do I have individual user sessions with logins that show different content to different users? That seems, if not basic, fundamental to at least know how to do.</p><p>Should I hand-type static HTML to do this? Is that what modern web developers typically do? Will learning HTML, CSS, and JS teach me how to use a backend? Which backend language should I pick? Should I use a database? Which one? Or should I use AWS?  Is all I need HTML, CSS, and JS?</p><p>PHP, is that a good backend starting point? That seems to be pretty fundamental, since over half of all websites use it. A LAMP stack, right? No? What about Python? Ruby? C? Rust? Arc? Elm?</p><p>Should I use Node? If so, what is the typical Node setup?</p><p>Should I use webassembly? That&#x27;s a fundamental and new browser technology.</p><p>How do I compress and minify code and images to be served? A makefile, right? That&#x27;s the typical way to build things in my software world.</p>",
                      children: [],
                    },
                  ],
                },
                {
                  id: 27171688,
                  created_at: "2021-05-16T06:37:02.000Z",
                  author: "reynhaim",
                  text: '<p><a href="https:&#x2F;&#x2F;fullstackopen.com&#x2F;en&#x2F;" rel="nofollow">https:&#x2F;&#x2F;fullstackopen.com&#x2F;en&#x2F;</a></p><p>This is a good resource that will walk you through the cutting edge web development technologies, starting from the very basics and progressing to the more complex matters in the end. Highly recommended.</p>',
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 27170589,
          created_at: "2021-05-16T02:01:35.000Z",
          author: "z5h",
          text: "<p>Helpful article. Since I’ve avoided directly coding in JS for a while: So getters and setters add complexity and ambiguity to avoid typing “()”? Did I get that right?</p>",
          children: [
            {
              id: 27171144,
              created_at: "2021-05-16T04:06:56.000Z",
              author: "hajile",
              text: "<p>Pretty much. I was surprised to see them here though. They shipped in ES5. To put that in perspective, IE9 supported them in 2011.</p><p>They occasionally have uses, but generally, I think they aren&#x27;t hyper useful.</p>",
              children: [],
            },
          ],
        },
        {
          id: 27185959,
          created_at: "2021-05-17T17:36:22.000Z",
          author: "fithisux",
          text: "<p>Is there something similar for C++?</p>",
          children: [],
        },
        {
          id: 27169065,
          created_at: "2021-05-15T21:10:58.000Z",
          author: "ertucetin",
          text: "<p>ClojureScript, that&#x27;s what you&#x27;ve missed...</p>",
          children: [],
        },
        {
          id: 27167786,
          created_at: "2021-05-15T18:43:25.000Z",
          author: "qwertox",
          text: "<p>It&#x27;s a great compilation, but I&#x27;d like to have each item to have a link to the related caniuse.com page.</p><p>Sometimes I can use Array.forEach() and sometimes not, and I don&#x27;t know why, even if I&#x27;m only using Chrome. So I just use lodash.</p>",
          children: [
            {
              id: 27176836,
              created_at: "2021-05-16T20:40:04.000Z",
              author: "TheAceOfHearts",
              text: "<p>Someone already commented that you can use `[...iterable]` to convert any iterable into an array, but if you&#x27;re doing this just to call forEach on it then it&#x27;s probably better to use for-of in order to avoid allocating an additional array:</p><p><pre><code>    for (const item of iterable) {\n      &#x2F;&#x2F; do forEach stuff here\n    }</code></pre></p>",
              children: [],
            },
            {
              id: 27168749,
              created_at: "2021-05-15T20:35:18.000Z",
              author: "sandrot",
              text: "<p>Try using Array.from(arrayish).forEach() to convert the thing that looks like an array to an actual array. For instance, you can&#x27;t use map() on a NodeList (document.querySelectorAll returns a NodeList), so you have to use Array.from(NodeList) to first convert it to an array.</p>",
              children: [
                {
                  id: 27168807,
                  created_at: "2021-05-15T20:41:28.000Z",
                  author: "dragonwriter",
                  text: "<p>&gt; Try using Array.from(arrayish).forEach() to convert the thing that looks like an array to an actual array.</p><p>Spread syntax is my goto for that:</p><p><pre><code>  [...arrayish].forEach(...)\n</code></pre>\nBut, it being JavaScript, there’s probably a subtle distinction in where Array.from(arrayish) works and where [...arrayish] works.</p>",
                  children: [
                    {
                      id: 27171181,
                      created_at: "2021-05-16T04:14:34.000Z",
                      author: "hajile",
                      text: "<p>There&#x27;s a very big distinction.</p><p>`...foo` requires `foo` to be an iterable (implements the iterator known symbol).</p><p>`Array.From()` only requires it to be array-like and not necessarily iterable.</p>",
                      children: [
                        {
                          id: 27174289,
                          created_at: "2021-05-16T15:24:54.000Z",
                          author: "dragonwriter",
                          text: "<p>Good point. I don&#x27;t think I&#x27;ve run into many non-iterable arraylikes, but I understand they used to be more common (e.g., a number of standard things that are now specced as iterable arraylikes used to be just the latter) and there’s probably a lot lurking in library&#x2F;legacy code.</p>",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 27166509,
          created_at: "2021-05-15T16:17:57.000Z",
          author: "rm_-rf_slash",
          text: "<p>JavaScript has grown a lot in the last 10 years, the last ~5 in particular with ES5&#x2F;ES6.</p><p>There are still “fucking JavaScript” moments but those are few and far between compared to what they used to be. The “...” operator in particular has been hyper useful for neatly modifying complex objects without turning into spaghetti code.</p><p>SPA+node&#x2F;express is a pretty solid stack these days because of these improvements. I no longer find myself missing Rails for Ruby’s syntactic sugar and knowing that operations on the server will work exactly the same on the client has been great for browser console debug sessions.</p><p>The holy grail would be for HPC JavaScript libraries to allow the same ease of implementation to use something like NVIDIA RAPIDS (especially RAPIDS itself) as easily as we get with Python. Given how far js has come, I don’t think that’s an unrealistic proposition.</p>",
          children: [
            {
              id: 27167768,
              created_at: "2021-05-15T18:41:03.000Z",
              author: "lanstin",
              text: "<p>Adding existing c libraries to python is trivial, and very C like experience for memory management etc. adding existing C libraries into node engine requires more skill and delicacy due to the C++ and the relatively more complicated v8 way of doing things.</p>",
              children: [],
            },
          ],
        },
        {
          id: 27172397,
          created_at: "2021-05-16T09:20:33.000Z",
          author: "jokoon",
          text: "<p>As a JS hater, I have to admit it was a pleasant read.</p><p>I would still love a &quot;20 mistakes you need to avoid when writing JS&quot;.</p><p>One of the most horrible &quot;WHAT IS HAPPENING HERE?&quot; moment in JS was when there was a missing semicolon after some multiline code and error messages were not helping at all. I&#x27;m wondering if JS compilers will have some linter or will one day help beginners be warned of &quot;possible mistakes&quot;.</p><p>Isn&#x27;t there a list of &quot;good practices&quot; or &quot;js coding standards&quot;?</p>",
          children: [
            {
              id: 27172430,
              created_at: "2021-05-16T09:28:27.000Z",
              author: "hnarn",
              text: "<p>&gt; a missing semicolon after some multiline code</p><p>I&#x27;m not a JS dev but isn&#x27;t this something almost any IDE with a linter would help you out with?</p>",
              children: [],
            },
            {
              id: 27172433,
              created_at: "2021-05-16T09:29:07.000Z",
              author: "z3t4",
              text: "<p>Because errors dude to missing semicolon will happen so rarely, people skip them for various reasons, but the fix for these errors are to <i>use semicolon</i>, or a tool that will tell you where a semicolon would change the &quot;abstract syntax tree&quot; (AST). Because the JS ecosystem is so diverse, there are many &quot;best practices&quot;. And the languages itself has many, many ways to do the same thing, espcially with ES6&#x2F;2015 onward you have many more options, which are mostly picked by personal preferences and synthetic reasons.</p>",
              children: [],
            },
            {
              id: 27172766,
              created_at: "2021-05-16T10:53:18.000Z",
              author: "mostlystatic",
              text: "<p>Formatters like Prettier can help here. For example, this code contains a function call, because the first line doesn&#x27;t end with a semicolon.</p><p><pre><code>  let a = 123  \n  ({a}= {a: 10})\n</code></pre>\nPrettier will reformat it like this:</p><p><pre><code>  let a = 123(({ a } = { a: 10 }));\n</code></pre>\nYou could also use ESLint to enforce semicolons.</p><p>The error messages when running code like this aren&#x27;t very good though.</p>",
              children: [],
            },
          ],
        },
        {
          id: 27167039,
          created_at: "2021-05-15T17:18:55.000Z",
          author: "Cyberdog",
          text: "<p>I didn&#x27;t know JS had `??` for a nil coalescing operator, or, more specifically, I thought it already had `||` for that purpose, since I&#x27;ve been using it for that for a decade or so without any problems. How do the two differ?</p>",
          children: [
            {
              id: 27167070,
              created_at: "2021-05-15T17:21:11.000Z",
              author: "TooCleverByHalf",
              text: "<p>?? - returns right side operand if left side operand is null or undefined</p><p>|| - returns right side operand if left side operand is any falsy value</p>",
              children: [],
            },
            {
              id: 27167076,
              created_at: "2021-05-15T17:21:57.000Z",
              author: "luftbbb",
              text: "<p>Null coalescing is far more concise and basically offers a retroactive step in the case of a null. It&#x27;s entirely different from using an OR condition</p>",
              children: [],
            },
            {
              id: 27167085,
              created_at: "2021-05-15T17:22:52.000Z",
              author: "qsort",
              text: "<p></p><p><pre><code>    &gt; 0 ?? 1\n    0\n\n    &gt; 0 || 1\n    1</code></pre></p>",
              children: [
                {
                  id: 27167165,
                  created_at: "2021-05-15T17:30:56.000Z",
                  author: "nailer",
                  text: "<p>I like this answer because it’s practical. Eg score 0 is a different thing from score undefined (which means you don’t know the score).</p>",
                  children: [],
                },
              ],
            },
            {
              id: 27167100,
              created_at: "2021-05-15T17:24:26.000Z",
              author: "frosted-flakes",
              text: "<p>?? only coalesces nullish values (hence the name), which only includes null and undefined. || coalesces <i>falsey</i> values, which include false, 0, and empty strings. || might work most of the time, but it requires extra checks when falsey values are valid.</p>",
              children: [],
            },
            {
              id: 27167133,
              created_at: "2021-05-15T17:28:15.000Z",
              author: "beardyw",
              text: "<p>I think ?? only acts on null or undefined, || acts on any falsey value.</p>",
              children: [],
            },
          ],
        },
        {
          id: 27166847,
          created_at: "2021-05-15T16:54:56.000Z",
          author: "macando",
          text: "<p><i>async await</i> was the biggest breakthrough for me. Made JavaScript code 3x more readable.</p>",
          children: [
            {
              id: 27167892,
              created_at: "2021-05-15T18:58:24.000Z",
              author: "BenoitEssiambre",
              text: '<p>I really wish when things moved to async&#x2F;await, that they would have gotten rid of promises like I proposed here: <a href="https:&#x2F;&#x2F;es.discourse.group&#x2F;t&#x2F;callback-based-simplified-async-await&#x2F;343" rel="nofollow">https:&#x2F;&#x2F;es.discourse.group&#x2F;t&#x2F;callback-based-simplified-async...</a></p><p>As it stands it&#x27;s layers of caching, state machines and complexity.</p>',
              children: [
                {
                  id: 27185173,
                  created_at: "2021-05-17T16:17:12.000Z",
                  author: "Oddskar",
                  text: "<p>It&#x27;s building on top of something that developers should be using anyway; or at least have familiarity with. I&#x27;m quite glad they ended up going this route for that reason.</p>",
                  children: [],
                },
                {
                  id: 27169818,
                  created_at: "2021-05-15T23:16:33.000Z",
                  author: "Sephr",
                  text: '<p>Your proposal seems very reminiscent of the generator-based JavaScript async library I created back in 2010:</p><p><a href="https:&#x2F;&#x2F;eligrey.com&#x2F;blog&#x2F;pausing-javascript-with-async-js&#x2F;" rel="nofollow">https:&#x2F;&#x2F;eligrey.com&#x2F;blog&#x2F;pausing-javascript-with-async-js&#x2F;</a></p>',
                  children: [],
                },
              ],
            },
            {
              id: 27175322,
              created_at: "2021-05-16T17:28:47.000Z",
              author: "splendidHaiku",
              text: "<p>For me too. Only thing I sometimes struggle with, is figuring out how to place error catches.\nWrap each async functions body in a try catch? Or always attach a catch handler to the calling function? But what if I forget to do that?\nShould the caller or the callee handle the errors or can both?</p>",
              children: [],
            },
            {
              id: 27167395,
              created_at: "2021-05-15T17:57:51.000Z",
              author: "contriban",
              text: "<p>Confirmed. Every time I convert an old Node project to promises I constantly find bugs and situation that were just lost in the hell. The result is also so much cleaner that sometimes you realize you were doing something wrong entirely and you scrap the whole thing. No other JavaScript improvement comes close. Everything else is nice but only saves a few chars at most.</p>",
              children: [
                {
                  id: 27167552,
                  created_at: "2021-05-15T18:15:42.000Z",
                  author: "macando",
                  text: "<p>And they announced promises like a big improvement over callbacks :D Now that was hell! Fortunately, when I started doing serious Node.js development, callbacks were already on the way out.</p>",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 27166862,
          created_at: "2021-05-15T16:56:15.000Z",
          author: "lewisjoe",
          text: '<p>I made a similar detailed document to bring my team up on the modern web dev workflows: <a href="https:&#x2F;&#x2F;bit.ly&#x2F;3oi08M2" rel="nofollow">https:&#x2F;&#x2F;bit.ly&#x2F;3oi08M2</a></p>',
          children: [],
        },
        {
          id: 27169938,
          created_at: "2021-05-15T23:37:54.000Z",
          author: "semireg",
          text: "<p>I love articles like this. I largely transitioned from obj-c&#x2F;Swift&#x2F;Kotlin mobile app dev to “modern”JS via Babel&#x2F;Flow&#x2F;webpack and now TS. I love it. I love the control of building my own language.</p>",
          children: [],
        },
        {
          id: 27170722,
          created_at: "2021-05-16T02:28:49.000Z",
          author: "krick",
          text: "<p>Cool, but as someone who does mainly backend and only rarely tries to do some FE myself (because, come on, you are supposed to be at least somewhat full-stack!), I feel like what I <i>actually</i> missed over the last 10 years is the current consensus on go-to tools&#x2F;frameworks&#x2F;libraries, both JS and CSS. Some &quot;best practices 2021&quot; tutorial would be way more valuable to me, but somehow I can never find one.</p>",
          children: [],
        },
        {
          id: 27168716,
          created_at: "2021-05-15T20:31:32.000Z",
          author: "tomcam",
          text: "<p>Fantastic! I admit I want the same article for C. I am like a walking C89 standard but after that...</p>",
          children: [],
        },
        {
          id: 27167695,
          created_at: "2021-05-15T18:32:49.000Z",
          author: "epaulson",
          text: "<p>I&#x27;m years behind on Javascript (I&#x27;m circa &#x27;AJAX is new&#x27; in my knowledge) but I&#x27;ve been having good luck catching up using the Babel REPL with small snippets to just see how the new features get translated into the Javascript I know. Seeing what the compiler renames is a good way to understand the new scoping rules, etc.</p><p>It&#x27;s been especially helpful for yield and async&#x2F;await, but I wonder if there&#x27;s a bug in Babel with async&#x2F;await. Just using the code sample from the article:</p><p><pre><code>  function fetchUserName() {\n    return new Promise(resolve =&gt; setTimeout(resolve, 500))\n  }\n      \n  async function withAsync() {\n    print(&quot;withAsync: fetching...&quot;)\n    await fetchUserName()\n    print(&quot;withAsync: done&quot;)\n  }\n  await withAsync()\n</code></pre>\nwhen I set the target to be &#x27;ie 6&#x27;, so hopefully I get output that&#x27;s only the Javascript that I know, most of this gets translated to (a lot of) Javascript that looks normal for 2005 Javascript - except the last &#x27;await&#x27; line is still there. Is that a bug&#x2F;limitation in Babel or was &#x27;await&#x27; present in Javascript from years ago?</p>",
          children: [
            {
              id: 27168045,
              created_at: "2021-05-15T19:19:08.000Z",
              author: "dclowd9901",
              text: "<p>I don&#x27;t know what the REPL you&#x27;re running does with top level functions, but my guess is that an `await` needs to run within a function that is declared `async`. The reason (if so) would be that then babel could then transpile the function appropriately into a Promisory function. At the top level, what function would be translated?</p>",
              children: [],
            },
            {
              id: 27168202,
              created_at: "2021-05-15T19:35:50.000Z",
              author: "mweberxyz",
              text: "<p>Top-level await is very, very new and requires ES modules -- you can only use this feature without warnings recently in Node 15. For the foreseeable future, the final line should be replaced with:</p><p><pre><code>    withAsync()\n       .then(() =&gt; print(&quot;done&quot;)\n       .catch((err) =&gt; console.error(err);</code></pre></p>",
              children: [
                {
                  id: 27168926,
                  created_at: "2021-05-15T20:54:55.000Z",
                  author: "sandrot",
                  text: "<p>You&#x27;re right, thank you for the explanation.\nMy REPL runs the code in the textarea in an anonymous Async function, which is why top level async works in my examples.</p>",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: 27166433,
          created_at: "2021-05-15T16:08:24.000Z",
          author: "j45",
          text: "<p>Nice read. I wish something would speak to the increased brittleness of software in this world too.</p>",
          children: [],
        },
        {
          id: 27167970,
          created_at: "2021-05-15T19:08:58.000Z",
          author: "jonplackett",
          text: '<p>Another really good resource with a lot of examples and explanation: <a href="https:&#x2F;&#x2F;javascript.info&#x2F;" rel="nofollow">https:&#x2F;&#x2F;javascript.info&#x2F;</a></p>',
          children: [
            {
              id: 27170283,
              created_at: "2021-05-16T00:53:23.000Z",
              author: "elevenoh",
              text: "<p>This has been a pretty quality reference for me over the years.</p>",
              children: [],
            },
          ],
        },
        {
          id: 27170275,
          created_at: "2021-05-16T00:50:21.000Z",
          author: "elevenoh",
          text: "<p>This is seriously great.</p><p>I like JS a lot these days.</p>",
          children: [],
        },
        {
          id: 27166444,
          created_at: "2021-05-15T16:09:45.000Z",
          author: "tyingq",
          text: '<p>Site seems a bit overwhelmed, archive.org copy: <a href="https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20210515151920&#x2F;https:&#x2F;&#x2F;turriate.com&#x2F;articles&#x2F;modern-javascript-everything-you-missed-over-10-years" rel="nofollow">https:&#x2F;&#x2F;web.archive.org&#x2F;web&#x2F;20210515151920&#x2F;https:&#x2F;&#x2F;turriate....</a></p>',
          children: [
            {
              id: 27168939,
              created_at: "2021-05-15T20:56:18.000Z",
              author: "sandrot",
              text: "<p>thank you. I had to change my idle connection timeouts. Eeep!</p>",
              children: [],
            },
          ],
        },
        {
          id: 27173366,
          created_at: "2021-05-16T12:52:10.000Z",
          author: "hultner",
          text: "<p>I see no mention of generators except for a link in the reference list at the end.</p>",
          children: [],
        },
        {
          id: 27168761,
          created_at: "2021-05-15T20:36:06.000Z",
          author: "vmception",
          text: "<p>&gt; The async&#x2F;await keywords are here to save you from callback hell</p><p>but does it?</p>",
          children: [
            {
              id: 27168820,
              created_at: "2021-05-15T20:42:31.000Z",
              author: "stevula",
              text: "<p>Absolutely, unless you’re using node or library functions that require callbacks. Even then there is usually a non-callback-based alternative or you can wrap in a promise to use async&#x2F;await.</p>",
              children: [],
            },
          ],
        },
        {
          id: 27168508,
          created_at: "2021-05-15T20:05:50.000Z",
          author: "amerine",
          text: "<p>Hey Sandro, it’s been a long time! Excellent post!</p>",
          children: [
            {
              id: 27168621,
              created_at: "2021-05-15T20:20:34.000Z",
              author: "sandrot",
              text: "<p>Thank you, Mark! Super long time.</p>",
              children: [],
            },
          ],
        },
      ],
    },
    {
      created_at: "2021-12-11T19:28:46.000Z",
      title: "Professional maintainers: a wake-up call",
      author: "FiloSottile",
      points: 487,
      num_comments: 377,
      objectID: "29523510",
    },
    {
      created_at: "2021-12-11T19:41:44.000Z",
      title: "Log4j: Between a rock and a hard place",
      author: "todsacerdoti",
      points: 452,
      num_comments: 277,
      objectID: "29523608",
    },
    {
      created_at: "2021-12-12T00:43:16.000Z",
      title: "Apple’s Newest OLED Supplier",
      author: "type0",
      points: 151,
      num_comments: 104,
      objectID: "29525871",
    },
    {
      created_at: "2021-12-10T22:34:32.000Z",
      title: "The Invention of Chinese",
      author: "Thevet",
      points: 147,
      num_comments: 123,
      objectID: "29516272",
    },
    {
      created_at: "2021-12-11T20:45:54.000Z",
      title:
        "Carolina Gold was once the most popular rice grown in America (2019)",
      author: "Tomte",
      points: 91,
      num_comments: 82,
      objectID: "29524120",
    },
    {
      created_at: "2021-12-11T23:02:25.000Z",
      title: "Moore's Law, AI, and the pace of progress",
      author: "shelfchair",
      points: 86,
      num_comments: 21,
      objectID: "29525107",
    },
    {
      created_at: "2021-12-10T11:52:28.000Z",
      title: "Right-to-Left Styling 101",
      author: "john-doe",
      points: 77,
      num_comments: 8,
      objectID: "29508828",
    },
    {
      created_at: "2021-12-12T03:19:39.000Z",
      title: "CP/M Source Code",
      author: "kristopolous",
      points: 73,
      num_comments: 13,
      objectID: "29526838",
    },
    {
      created_at: "2021-12-12T06:15:24.000Z",
      title: "Internet uptake has accelerated during the pandemic",
      author: "giuliomagnifico",
      points: 68,
      num_comments: 52,
      objectID: "29527560",
    },
    {
      created_at: "2021-12-10T09:16:01.000Z",
      title: "Night Sky Map and Planets Visible Tonight",
      author: "News-Dog",
      points: 47,
      num_comments: 6,
      objectID: "29507980",
    },
  ],
};

export const results = {
  hits: [
    {
      created_at: "2018-05-07T19:24:11.000Z",
      title: "Conversations with a six-year-old on functional programming",
      author: "weatherlight",
      points: 2074,
      num_comments: 309,
      objectID: "17015661",
    },
    {
      created_at: "2021-08-17T08:55:29.000Z",
      title:
        "Show HN: Imba – I have spent 7 years creating a programming language for the web",
      author: "somebee",
      points: 1216,
      num_comments: 345,
      objectID: "28207662",
    },
    {
      created_at: "2016-04-14T14:44:57.000Z",
      title: "Kite – Programming Copilot",
      author: "wodow",
      points: 1138,
      num_comments: 232,
      objectID: "11497111",
    },
    {
      created_at: "2019-04-21T13:49:31.000Z",
      title:
        "Ask HN: What is your money-making side project outside programming?",
      author: "napolux",
      points: 1134,
      num_comments: 717,
      objectID: "19712057",
    },
    {
      created_at: "2016-10-28T16:05:32.000Z",
      title: "Eve: Programming designed for humans",
      author: "ibdknox",
      points: 1070,
      num_comments: 374,
      objectID: "12817468",
    },
    {
      created_at: "2012-09-26T18:21:30.000Z",
      title: "Bret Victor: Learnable Programming",
      author: "siavosh",
      points: 1049,
      num_comments: 184,
      objectID: "4577133",
    },
    {
      created_at: "2012-11-19T16:38:29.000Z",
      title:
        "How I went from $100-an-hour programming to $X0,000-a-week consulting",
      author: "atomical",
      points: 1024,
      num_comments: 263,
      objectID: "4805091",
    },
    {
      created_at: "2016-03-08T17:43:35.000Z",
      title: "How to Pass a Programming Interview",
      author: "runesoerensen",
      points: 1020,
      num_comments: 552,
      objectID: "11246917",
    },
    {
      created_at: "2016-10-16T11:15:55.000Z",
      title: "Programming books you might want to consider reading",
      author: "deafcalculus",
      points: 1019,
      num_comments: 131,
      objectID: "12718102",
    },
    {
      created_at: "2021-02-11T10:31:47.000Z",
      title: "Beej's Guide to Network Programming (1994-2020)",
      author: "ColinWright",
      points: 993,
      num_comments: 165,
      objectID: "26100075",
    },
    {
      created_at: "2017-06-22T15:00:35.000Z",
      title: "Luna – Visual and textual functional programming language",
      author: "interpol_p",
      points: 944,
      num_comments: 310,
      objectID: "14612680",
    },
    {
      created_at: "2017-06-05T11:03:18.000Z",
      title: "Ask HN: What language-agnostic programming books should I read?",
      author: "robschia",
      points: 927,
      num_comments: 337,
      objectID: "14486657",
    },
    {
      created_at: "2014-04-23T15:48:57.000Z",
      title: "“Game Programming Patterns” is now finished",
      author: "rockybox",
      points: 920,
      num_comments: 74,
      objectID: "7634734",
    },
    {
      created_at: "2014-12-01T21:11:36.000Z",
      title: "The Case for Slow Programming",
      author: "bufo",
      points: 865,
      num_comments: 337,
      objectID: "8683827",
    },
    {
      created_at: "2016-09-12T04:29:15.000Z",
      title: "Ask HN: Is web programming a series of hacks on hacks?",
      author: "barefootcoder",
      points: 822,
      num_comments: 661,
      objectID: "12477190",
    },
    {
      created_at: "2017-12-11T15:58:17.000Z",
      title: "Exercism – Level up your programming skills",
      author: "moesart",
      points: 795,
      num_comments: 94,
      objectID: "15897809",
    },
    {
      created_at: "2017-02-07T23:02:11.000Z",
      title: "What programming languages are used most on weekends?",
      author: "minaandrawos",
      points: 782,
      num_comments: 288,
      objectID: "13593814",
    },
    {
      created_at: "2017-12-23T15:12:52.000Z",
      title: "How I went from programming to consulting (2012)",
      author: "putnam",
      points: 780,
      num_comments: 472,
      objectID: "15994410",
    },
    {
      created_at: "2019-01-06T21:35:29.000Z",
      title: "How to Start Learning Computer Graphics Programming",
      author: "phodo",
      points: 754,
      num_comments: 120,
      objectID: "18840859",
    },
    {
      created_at: "2021-01-20T19:24:30.000Z",
      title: "Ask HN: Anyone know any funny programming jokes?",
      author: "arthurcolle",
      points: 740,
      num_comments: 850,
      objectID: "25850739",
    },
    {
      created_at: "2016-11-01T09:53:51.000Z",
      title: "Music for Programming",
      author: "galfarragem",
      points: 738,
      num_comments: 427,
      objectID: "12844434",
    },
    {
      created_at: "2020-07-28T16:22:46.000Z",
      title: "Historical programming-language groups disappearing from Google",
      author: "beachwood23",
      points: 737,
      num_comments: 332,
      objectID: "23977375",
    },
    {
      created_at: "2020-10-29T19:40:41.000Z",
      title: "Show HN: What would mechanical programming look like?",
      author: "felipereigosa",
      points: 719,
      num_comments: 149,
      objectID: "24934722",
    },
    {
      created_at: "2019-01-21T03:30:17.000Z",
      title: "Programming Fonts – Test Drive",
      author: "ChrisGranger",
      points: 712,
      num_comments: 283,
      objectID: "18957406",
    },
    {
      created_at: "2020-11-26T18:08:16.000Z",
      title: "How io_uring and eBPF Will Revolutionize Programming in Linux",
      author: "harporoeder",
      points: 709,
      num_comments: 320,
      objectID: "25222243",
    },
    {
      created_at: "2011-10-17T13:32:31.000Z",
      title: "Ask HN: What programming blogs do you read daily?",
      author: "t3rcio",
      points: 707,
      num_comments: 119,
      objectID: "3120380",
    },
    {
      created_at: "2013-09-10T00:55:11.000Z",
      title: "To my daughter's high school programming teacher",
      author: "Anechoic",
      points: 702,
      num_comments: 582,
      objectID: "6357317",
    },
    {
      created_at: "2012-04-27T19:39:43.000Z",
      title: "Incredibox - Background music for programming. ",
      author: "bmelton",
      points: 682,
      num_comments: 170,
      objectID: "3900711",
    },
    {
      created_at: "2022-02-02T16:13:55.000Z",
      title: "Competitive Programming with AlphaCode",
      author: "yigitdemirag",
      points: 678,
      num_comments: 397,
      objectID: "30179549",
    },
    {
      created_at: "2020-04-09T08:54:24.000Z",
      title: "Swift: Google’s Bet on Differentiable Programming",
      author: "BerislavLopac",
      points: 675,
      num_comments: 539,
      objectID: "22820852",
    },
    {
      created_at: "2020-05-16T14:36:42.000Z",
      title: "Game Programming Patterns (2014)",
      author: "simonpure",
      points: 635,
      num_comments: 86,
      objectID: "23203699",
    },
    {
      created_at: "2019-01-22T10:49:06.000Z",
      title: "Network protocols for anyone who knows a programming language",
      author: "kalimatas",
      points: 635,
      num_comments: 71,
      objectID: "18967387",
    },
    {
      created_at: "2020-08-12T18:30:30.000Z",
      title: "Rob Pike's Rules of Programming (1989)",
      author: "gjvc",
      points: 631,
      num_comments: 323,
      objectID: "24135189",
    },
    {
      created_at: "2016-08-24T20:42:03.000Z",
      title: "Show HN: Carbide – A New Programming Environment",
      author: "antimatter15",
      points: 628,
      num_comments: 136,
      objectID: "12355102",
    },
    {
      created_at: "2018-10-16T02:20:36.000Z",
      title: "How Lisp Became God's Own Programming Language",
      author: "chwolfe",
      points: 614,
      num_comments: 307,
      objectID: "18225870",
    },
    {
      created_at: "2019-04-12T05:23:15.000Z",
      title: "Learn more programming languages, even if you won't use them",
      author: "ingve",
      points: 602,
      num_comments: 304,
      objectID: "19642190",
    },
    {
      created_at: "2022-07-07T06:51:42.000Z",
      title: "DRY is an over-rated programming principle?",
      author: "gcassie",
      points: 599,
      num_comments: 486,
      objectID: "32010699",
    },
    {
      created_at: "2021-04-06T14:03:00.000Z",
      title: "Programming is hard",
      author: "zuzuleinen",
      points: 597,
      num_comments: 445,
      objectID: "26711862",
    },
    {
      created_at: "2018-03-05T04:30:09.000Z",
      title: "A week-long programming retreat",
      author: "bane",
      points: 596,
      num_comments: 154,
      objectID: "16518726",
    },
    {
      created_at: "2013-07-30T18:50:56.000Z",
      title: "The Future of Programming",
      author: "rpearl",
      points: 595,
      num_comments: 341,
      objectID: "6129148",
    },
    {
      created_at: "2016-12-08T07:43:20.000Z",
      title: "Talks that changed the way I think about programming",
      author: "greywolve",
      points: 593,
      num_comments: 95,
      objectID: "13128989",
    },
    {
      created_at: "2019-08-11T20:53:07.000Z",
      title: "Paged Out – a new experimental magazine about programming",
      author: "krzkaczor",
      points: 583,
      num_comments: 82,
      objectID: "20670432",
    },
    {
      created_at: "2020-04-22T09:31:52.000Z",
      title:
        "Conversations with a six-year-old on functional programming (2018)",
      author: "_ttg",
      points: 580,
      num_comments: 155,
      objectID: "22943749",
    },
    {
      created_at: "2014-03-20T16:07:06.000Z",
      title: "Hack: a new programming language for HHVM",
      author: "bos",
      points: 576,
      num_comments: 415,
      objectID: "7436401",
    },
    {
      created_at: "2018-02-16T05:16:09.000Z",
      title:
        "The Benjamin Franklin method for learning more from programming books",
      author: "nancyhua",
      points: 574,
      num_comments: 99,
      objectID: "16390046",
    },
    {
      created_at: "2016-06-07T22:54:54.000Z",
      title: "Mastering Programming: An Outline",
      author: "KentBeck",
      points: 562,
      num_comments: 113,
      objectID: "11858667",
    },
    {
      created_at: "2022-07-01T10:00:16.000Z",
      title: "Functional programming jargon in plain English",
      author: "mgliwka",
      points: 557,
      num_comments: 184,
      objectID: "31944352",
    },
    {
      created_at: "2019-10-25T06:42:11.000Z",
      title: "قلب: a non-ASCII programming language written in Arabic",
      author: "kick",
      points: 556,
      num_comments: 623,
      objectID: "21352508",
    },
    {
      created_at: "2021-02-20T19:16:09.000Z",
      title: "How can you not be romantic about programming? (2020)",
      author: "_zhqs",
      points: 552,
      num_comments: 357,
      objectID: "26206921",
    },
    {
      created_at: "2013-12-16T08:11:18.000Z",
      title: "A Great Old-Timey Game-Programming Hack",
      author: "acqq",
      points: 552,
      num_comments: 145,
      objectID: "6913467",
    },
    {
      created_at: "2014-12-11T17:20:04.000Z",
      title: "Streem – a new programming language from Matz",
      author: "tree_of_item",
      points: 547,
      num_comments: 189,
      objectID: "8735892",
    },
    {
      created_at: "2013-07-15T18:29:31.000Z",
      title: "Cello: Higher level programming in C",
      author: "mntmn",
      points: 535,
      num_comments: 158,
      objectID: "6047576",
    },
    {
      created_at: "2020-01-08T13:53:43.000Z",
      title: "Show HN: Beef, a new performance-oriented programming language",
      author: "beefdev",
      points: 533,
      num_comments: 277,
      objectID: "21991382",
    },
    {
      created_at: "2022-06-02T21:58:16.000Z",
      title: "Rust Is Hard, Or: The Misery of Mainstream Programming",
      author: "avgcorrection",
      points: 532,
      num_comments: 795,
      objectID: "31601040",
    },
    {
      created_at: "2019-09-26T13:14:55.000Z",
      title: "Programming Idioms",
      author: "hazbo",
      points: 532,
      num_comments: 150,
      objectID: "21080606",
    },
    {
      created_at: "2019-11-22T08:45:26.000Z",
      title: "Things I’ve learned in 20 years of programming",
      author: "galfarragem",
      points: 531,
      num_comments: 223,
      objectID: "21603920",
    },
    {
      created_at: "2018-05-15T09:15:08.000Z",
      title:
        "Professor Frisby's Mostly Adequate Guide to Functional Programming (2015)",
      author: "AdrianRossouw",
      points: 529,
      num_comments: 92,
      objectID: "17072662",
    },
    {
      created_at: "2020-06-13T15:06:07.000Z",
      title:
        "Microsoft: Rust Is the Industry’s ‘Best Chance’ at Safe Systems Programming",
      author: "adamnemecek",
      points: 523,
      num_comments: 440,
      objectID: "23509916",
    },
    {
      created_at: "2015-05-04T14:40:52.000Z",
      title: "The programming talent myth",
      author: "corbet",
      points: 510,
      num_comments: 341,
      objectID: "9486391",
    },
    {
      created_at: "2022-07-07T02:49:38.000Z",
      title: "Music for Programming",
      author: "Group_B",
      points: 510,
      num_comments: 259,
      objectID: "32009440",
    },
    {
      created_at: "2019-02-18T18:04:09.000Z",
      title:
        "Harder programming questions do a worse job of predicting outcomes",
      author: "Harj",
      points: 507,
      num_comments: 511,
      objectID: "19192676",
    },
    {
      created_at: "2011-06-08T12:21:31.000Z",
      title:
        '"My current theory is that programming is quite literally writing."',
      author: "damncabbage",
      points: 507,
      num_comments: 193,
      objectID: "2632816",
    },
    {
      created_at: "2021-04-23T05:56:51.000Z",
      title: "Beej’s Guide to C Programming [pdf]",
      author: "tumblewit",
      points: 507,
      num_comments: 171,
      objectID: "26911399",
    },
    {
      created_at: "2018-05-12T15:18:34.000Z",
      title: "Build your own X: project-based programming tutorials",
      author: "dhanush",
      points: 507,
      num_comments: 25,
      objectID: "17054419",
    },
    {
      created_at: "2022-03-22T07:30:15.000Z",
      title: "My guiding principles after 20 years of programming (2020)",
      author: "firstSpeaker",
      points: 505,
      num_comments: 189,
      objectID: "30763516",
    },
    {
      created_at: "2018-11-05T12:04:23.000Z",
      title:
        "Programming Paradigms for Dummies: What Every Programmer Should Know (2009) [pdf]",
      author: "tiniuclx",
      points: 504,
      num_comments: 163,
      objectID: "18381640",
    },
    {
      created_at: "2010-12-15T00:35:03.000Z",
      title:
        "If people tried to pay for other services like they try to pay for programming",
      author: "dkasper",
      points: 503,
      num_comments: 123,
      objectID: "2006458",
    },
    {
      created_at: "2013-02-26T23:34:41.000Z",
      title: "Code.org  Dedicated to growing computer programming education",
      author: "sethbannon",
      points: 496,
      num_comments: 183,
      objectID: "5289417",
    },
    {
      created_at: "2020-03-26T18:10:29.000Z",
      title:
        "It's not what programming languages do, it's what they shepherd you to",
      author: "ingve",
      points: 493,
      num_comments: 339,
      objectID: "22696229",
    },
    {
      created_at: "2021-08-16T14:38:20.000Z",
      title: "Alda – Text-Based Programming Language for Music Composition",
      author: "p1esk",
      points: 490,
      num_comments: 120,
      objectID: "28198641",
    },
    {
      created_at: "2016-06-08T13:45:12.000Z",
      title: "Typosquatting programming language package managers",
      author: "xrstf",
      points: 486,
      num_comments: 143,
      objectID: "11862217",
    },
  ],
};
