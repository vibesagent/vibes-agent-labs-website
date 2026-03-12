export function MountainScene() {
  return (
    <div className="identity__art">
      <svg
        aria-hidden="true"
        className="mountain-scene"
        viewBox="0 0 680 520"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect className="mountain-scene__sky" width="680" height="520" />
        <circle className="mountain-scene__sun" cx="540" cy="114" r="54" />

        <path
          className="mountain-scene__far"
          d="M0 330C56 298 104 304 152 266C196 232 218 190 262 180C312 168 346 224 398 230C446 236 486 194 536 198C586 202 630 248 680 274V520H0Z"
        />
        <path
          className="mountain-scene__mid"
          d="M0 376C60 350 128 360 184 324C232 294 274 244 324 236C386 226 420 286 478 296C528 304 598 266 680 312V520H0Z"
        />
        <path
          className="mountain-scene__front"
          d="M0 430C74 394 132 402 198 378C272 352 316 312 382 312C438 312 488 360 546 370C592 378 630 366 680 344V520H0Z"
        />

        <path
          className="mountain-scene__outline"
          d="M32 344C82 312 114 316 164 276C210 238 236 198 278 186C320 176 348 218 392 226C430 232 476 194 526 198C582 202 616 242 648 266"
        />
        <path
          className="mountain-scene__outline"
          d="M24 386C94 352 138 364 196 324C248 288 286 246 334 238C390 230 428 288 486 296C530 302 578 282 646 310"
        />
        <path
          className="mountain-scene__outline"
          d="M28 434C94 398 146 408 222 378C282 354 322 314 380 314C450 314 492 362 546 370C588 376 618 370 652 356"
        />

        <path
          className="mountain-scene__scribble"
          d="M108 270C142 246 166 228 198 212C236 190 260 180 286 176"
        />
        <path
          className="mountain-scene__scribble"
          d="M328 242C350 232 368 226 392 228C418 230 434 236 458 248"
        />
        <path
          className="mountain-scene__scribble"
          d="M462 206C500 190 530 188 560 194C586 198 612 216 632 238"
        />
        <path
          className="mountain-scene__grass"
          d="M74 418C90 402 98 394 114 386M148 404C160 390 170 380 188 370M228 396C240 382 254 370 274 360M448 414C464 398 474 390 490 384M534 406C546 392 558 380 574 370"
        />
      </svg>
    </div>
  )
}
