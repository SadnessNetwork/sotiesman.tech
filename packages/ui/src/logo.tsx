import { forwardRef } from 'react'

export const Logo = forwardRef<SVGSVGElement, React.SVGAttributes<SVGElement>>(
	(props, ref) => {
		return (
			<svg
				version='1.0'
				xmlns='http://www.w3.org/2000/svg'
				width={32}
				height={32}
				viewBox='0 0 1280 1876'
				ref={ref}
				{...props}
			>
				<path
					d='M212.768 77.8281L213.139 74.3027C212.891 74.5501 212.458 74.6738 211.84 74.6738C210.355 74.6738 207.572 74.4264 203.49 73.9316C203.861 74.7975 206.954 76.0964 212.768 77.8281ZM291.254 424.615V423.873C289.522 422.389 288.471 420.966 288.1 419.605C287.481 419.729 287.172 420.162 287.172 420.904L287.357 421.832C288.842 423.688 290.079 424.615 291.068 424.615H291.254ZM286.059 429.625C281.111 426.161 278.513 423.935 278.266 422.945C277.523 423.193 277.029 424.182 276.781 425.914C281.605 428.388 284.636 429.625 285.873 429.625H286.059ZM269.359 431.666L269.545 429.254C267.566 427.275 264.597 425.667 260.639 424.43L259.896 424.615C265.339 429.316 268.493 431.666 269.359 431.666ZM283.09 418.863L283.832 418.678C283.708 418.183 283.646 417.626 283.646 417.008L283.832 414.781L275.854 407.359C274.617 407.73 272.204 409.091 268.617 411.441C274.307 416.018 277.462 418.307 278.08 418.307C278.822 417.564 279.688 417.008 280.678 416.637C281.915 417.503 282.719 418.245 283.09 418.863ZM264.35 403.463C265.092 403.339 265.525 402.411 265.648 400.68L265.277 400.123C264.164 400.494 263.607 401.051 263.607 401.793C263.731 402.411 263.979 402.968 264.35 403.463ZM284.203 409.029V408.658C284.203 406.308 286.677 397.958 291.625 383.609L290.883 383.795C285.44 390.598 280.801 397.278 276.967 403.834C280.801 407.298 283.214 409.029 284.203 409.029ZM267.689 397.711C273.256 390.413 276.719 384.661 278.08 380.455L276.41 380.27C275.544 383.115 272.143 388.31 266.205 395.855L267.689 397.711ZM245.053 391.402L245.238 389.918C242.27 387.568 240.352 386.393 239.486 386.393L238.559 386.578C240.909 389.423 243.074 391.031 245.053 391.402ZM232.25 408.658L232.807 408.287C229.962 404.947 222.911 400.618 211.654 395.299L211.098 395.67C224.333 404.329 231.384 408.658 232.25 408.658ZM315.932 345.016L316.674 344.83L316.117 343.531L315.561 343.717L315.932 345.016ZM303.686 352.623L320.199 330.172L319.643 328.873C313.334 334.192 307.953 341.861 303.5 351.881L303.686 352.623ZM202.191 386.021L201.82 385.465C189.822 378.538 183.327 375.074 182.338 375.074L181.781 375.26C185.245 378.229 192.048 381.816 202.191 386.021ZM287.914 410.143L288.471 409.957C324.096 350.706 342.898 319.905 344.877 317.555L344.506 316.812L343.207 317.369C331.951 330.357 317.787 348.232 300.717 370.992C298.738 374.208 294.408 386.454 287.729 407.73C287.852 408.102 287.914 408.596 287.914 409.215V410.143ZM360.463 319.967L361.205 319.596C356.876 316.627 353.721 314.277 351.742 312.545C350.382 313.658 349.701 314.586 349.701 315.328V315.885L360.463 319.967ZM317.602 342.975C321.189 337.779 328.673 328.564 340.053 315.328L339.867 314.586L338.197 314.4C325.209 330.852 318.282 340.13 317.416 342.232L317.602 342.975ZM342.094 312.174C343.454 311.061 344.135 310.133 344.135 309.391L343.578 307.721C341.723 308.71 340.795 309.638 340.795 310.504V310.875L342.094 312.174ZM347.289 304.938C348.155 304.072 348.773 303.577 349.145 303.453L348.959 302.711H347.66C347.165 302.711 346.547 302.587 345.805 302.34L345.99 303.082C346.732 303.824 347.165 304.443 347.289 304.938ZM301.088 327.574C305.788 323.616 310.365 317.245 314.818 308.463L314.633 307.721C306.221 319.719 301.521 325.842 300.531 326.09L301.088 327.574ZM315.932 307.35L316.674 306.979L316.117 305.68L315.561 305.865L315.932 307.35ZM228.91 386.207L229.652 385.836C221.859 376.064 211.902 369.384 199.779 365.797C181.596 357.509 171.7 353.365 170.092 353.365L169.35 353.551C171.947 356.891 176.091 358.87 181.781 359.488C199.717 371.982 215.427 380.888 228.91 386.207ZM353.412 290.094L353.783 289.908C353.536 288.795 353.103 288.238 352.484 288.238C351.866 288.238 351.247 288.424 350.629 288.795C350.629 289.537 351.557 289.97 353.412 290.094ZM357.309 286.383C358.546 284.898 359.535 284.033 360.277 283.785C358.669 281.93 356.381 280.631 353.412 279.889C351.309 281.62 350.258 282.857 350.258 283.6V283.785C354.835 284.898 357.185 285.764 357.309 286.383ZM363.061 280.26C363.926 280.136 365.72 278.714 368.441 275.992C368.318 275.003 365.225 273.518 359.164 271.539C356.814 273.889 355.639 275.497 355.639 276.363V276.734C356.381 276.734 358.855 277.91 363.061 280.26ZM315.561 299.557C318.035 297.083 319.271 295.413 319.271 294.547C319.271 294.176 319.148 293.867 318.9 293.619C317.663 293.619 305.788 288.671 283.275 278.775L282.533 278.961C301.088 291.454 312.097 298.32 315.561 299.557ZM337.084 275.436C337.826 275.188 338.259 274.26 338.383 272.652C334.672 270.797 328.549 268.261 320.014 265.045L319.271 265.23C330.528 272.034 336.465 275.436 337.084 275.436ZM341.352 270.055C342.589 268.57 343.578 267.643 344.32 267.271L344.135 266.715C342.279 265.354 327.559 260.035 299.975 250.758L299.232 250.943C310.118 256.262 324.158 262.633 341.352 270.055ZM313.52 251.5L313.334 250.758C300.593 244.449 291.501 241.109 286.059 240.738C286.43 241.48 295.583 245.068 313.52 251.5ZM298.676 276.363L299.418 276.178C296.202 272.962 285.007 267.21 265.834 258.922C265.71 258.551 260.391 256.201 249.877 251.871L249.32 252.242C258.598 258.427 275.049 266.467 298.676 276.363ZM325.58 279.332L326.508 279.146C290.141 255.149 269.545 242.223 264.721 240.367L265.092 241.109C279.193 252.242 297.934 264.488 321.312 277.848C323.786 278.837 325.209 279.332 325.58 279.332ZM233.549 252.242L234.291 252.057C234.044 251.314 229.59 249.15 220.932 245.562C221.426 246.799 225.632 249.026 233.549 252.242ZM265.463 229.049C265.092 227.936 260.453 225.956 251.547 223.111L251.732 223.668C254.825 225.647 259.402 227.441 265.463 229.049ZM191.43 219.957L192.729 219.4L192.543 218.658L191.059 219.215L191.43 219.957ZM268.617 255.582L269.359 255.396C253.279 245.006 234.105 233.935 211.84 222.184C211.592 221.565 206.15 219.524 195.512 216.061L194.77 216.246C208.376 226.76 220.499 234.306 231.137 238.883C251.671 248.531 264.164 254.098 268.617 255.582ZM189.945 218.287L190.688 217.73C190.44 217.112 190.069 216.803 189.574 216.803C189.079 216.803 188.585 216.926 188.09 217.174C188.461 217.916 189.079 218.287 189.945 218.287ZM187.533 215.875C184.193 212.659 180.606 210.494 176.771 209.381L176.029 209.566C182.338 213.772 186.111 215.875 187.348 215.875H187.533ZM165.082 207.896L165.824 207.711C165.577 207.092 163.969 206.35 161 205.484C161.495 206.598 162.855 207.402 165.082 207.896ZM168.793 202.701C168.422 201.588 166.443 200.475 162.855 199.361L162.113 199.547C162.361 200.289 164.587 201.34 168.793 202.701ZM202.748 200.846L203.49 200.66C190.873 192.249 183.884 187.363 182.523 186.002C182.029 186.249 181.286 187.857 180.297 190.826L202.748 200.846ZM177.143 188.785L178.812 184.332C177.081 182.6 175.844 181.734 175.102 181.734H174.916C173.555 183.714 172.318 184.889 171.205 185.26C171.7 186.497 173.679 187.672 177.143 188.785ZM137.992 202.516L138.734 202.33C142.198 197.382 145.167 192.372 147.641 187.301L145.971 187.115C145.105 187.486 142.445 192.62 137.992 202.516ZM312.592 128.297C311.85 127.431 308.015 126.38 301.088 125.143L301.645 126.627C307.458 127.74 310.984 128.297 312.221 128.297H312.592ZM299.047 125.885L299.789 125.699L299.232 124.215L298.49 124.586L299.047 125.885ZM296.449 125.328L297.191 124.957L296.635 123.658L296.078 123.844L296.449 125.328ZM180.854 181.178C182.462 179.446 186.42 172.766 192.729 161.139L192.357 160.582L177.328 177.652L177.514 178.395C179.493 179.384 180.606 180.312 180.854 181.178ZM293.852 124.586L294.594 124.4L294.037 122.916L293.48 123.287L293.852 124.586ZM154.691 176.168C155.928 175.302 156.547 174.127 156.547 172.643C156.547 172.271 156.423 171.962 156.176 171.715C155.681 171.962 155.062 173.199 154.32 175.426L154.691 176.168ZM291.254 124.029L291.996 123.658L291.439 122.359L290.883 122.545L291.254 124.029ZM336.156 115.123C339.991 115.123 344.197 114.814 348.773 114.195L354.34 113.453L357.865 112.154C351.309 110.051 343.949 109 335.785 109L328.734 109.186L326.879 110.67L319.086 111.783C323.292 114.01 328.982 115.123 336.156 115.123ZM288.656 123.287L289.398 123.102L288.842 121.617L288.285 121.803L288.656 123.287ZM146.156 174.684C149.125 171.344 150.795 168.561 151.166 166.334C151.042 165.715 150.733 165.406 150.238 165.406C149.743 165.406 149.496 165.53 149.496 165.777C149.496 166.025 148.074 168.746 145.229 173.941C145.352 174.436 145.661 174.684 146.156 174.684ZM152.094 162.066L153.393 161.695L152.836 160.211C152.217 160.706 151.908 161.262 151.908 161.881L152.094 162.066ZM138.549 170.787L145.043 162.252C144.301 161.51 143.806 160.891 143.559 160.396L142.816 160.768C140.961 162.623 139.415 165.53 138.178 169.488L138.549 170.787ZM311.293 116.051C303.624 113.082 295.212 111.598 286.059 111.598H283.832C283.585 111.103 281.853 110.855 278.637 110.855C276.41 110.855 273.38 110.979 269.545 111.227C283.77 114.443 296.511 116.051 307.768 116.051H311.293ZM275.482 119.391L275.854 116.051H275.297C273.565 116.051 268.803 115.432 261.01 114.195L261.195 114.938C262.927 116.174 267.689 117.659 275.482 119.391ZM316.117 89.1465L315.561 87.6621C315.313 87.7858 314.942 87.8477 314.447 87.8477C313.458 87.8477 311.602 87.6003 308.881 87.1055L309.438 88.4043L310.551 88.2188C311.788 88.2188 313.643 88.528 316.117 89.1465ZM232.621 116.422C233.487 115.556 234.105 115.061 234.477 114.938L234.105 113.453C233.363 114.319 232.745 114.814 232.25 114.938L232.621 116.422ZM147.27 158.355C151.846 153.655 155.434 147.903 158.031 141.1L157.846 140.357C149.805 150.13 145.785 155.758 145.785 157.242C145.785 157.984 146.218 158.355 147.084 158.355H147.27ZM262.309 107.701L264.906 107.33C264.659 106.34 261.072 105.722 254.145 105.475C256.99 106.959 259.711 107.701 262.309 107.701ZM186.234 160.953C196.501 148.583 207.325 134.544 218.705 118.834L218.148 117.535L198.48 144.068L197.367 144.439C197.12 144.439 196.934 144.254 196.811 143.883C191.12 150.81 187.533 156.314 186.049 160.396L186.234 160.953ZM224.271 119.02C229.714 112.587 232.683 109.247 233.178 109C230.704 106.526 229.034 105.289 228.168 105.289H227.982C225.508 112.711 224.271 117.226 224.271 118.834V119.02ZM169.906 143.326C182.276 127.988 188.708 118.092 189.203 113.639L188.646 112.154C184.936 114.999 178.565 125.143 169.535 142.584L169.906 143.326ZM266.762 87.8477C257.237 85.25 249.691 83.9512 244.125 83.9512C248.207 86.5488 255.753 87.8477 266.762 87.8477ZM194.398 110.113L195.697 109.742C200.893 102.691 203.799 99.0423 204.418 98.7949L204.047 97.3105L202.562 97.8672C197.12 105.289 194.398 109.371 194.398 110.113ZM236.889 446.139C236.27 446.139 235.775 445.582 235.404 444.469C235.404 443.727 237.136 442.057 240.6 439.459C240.6 438.717 242.393 434.14 245.98 425.729L242.27 423.873C240.414 426.594 238.62 428.264 236.889 428.883C236.641 428.264 236.208 427.955 235.59 427.955H235.219C230.889 436.367 227.302 441.129 224.457 442.242C223.839 441.624 223.282 440.943 222.787 440.201C223.777 436.49 228.044 429.996 235.59 420.719V419.791L235.775 418.307L235.404 418.492C235.157 418.492 234.91 418.307 234.662 417.936C233.549 419.42 232.312 420.348 230.951 420.719L227.426 417.564L227.24 416.266C227.24 415.895 227.611 415.09 228.354 413.854C204.232 396.041 189.512 385.527 184.193 382.311C177.143 378.476 167.185 372.538 154.32 364.498C153.949 363.632 153.764 363.076 153.764 362.828C153.764 361.962 154.32 361.406 155.434 361.158C165.701 366.848 171.329 369.693 172.318 369.693H175.102L175.287 368.023C167.247 364.189 160.691 360.478 155.619 356.891L155.434 356.148L158.217 351.139H158.959L153.578 344.273L154.691 342.975H155.434L205.16 363.57L206.645 363.385C186.977 347.304 176.648 338.027 175.658 335.553C176.4 334.563 177.081 334.068 177.699 334.068C180.049 334.068 187.41 340.191 199.779 352.438C206.706 357.88 215.056 365.117 224.828 374.146L248.021 386.578C251.114 382.125 260.948 370.745 277.523 352.438C284.945 335.986 295.089 321.575 307.953 309.205C310.18 305.865 311.911 303.948 313.148 303.453L312.777 302.896L254.887 265.973C228.786 254.592 198.913 239.996 165.268 222.184V221.256C165.268 220.266 165.762 219.524 166.752 219.029C189.141 228.307 202.81 233.749 207.758 235.357L208.5 234.986C201.449 228.925 187.657 221.751 167.123 213.463C161.928 227.07 158.526 235.11 156.918 237.584C156.547 237.831 156.176 237.955 155.805 237.955C155.186 237.955 154.568 237.46 153.949 236.471L163.969 211.607C163.103 211.607 159.949 209.999 154.506 206.783L135.395 231.09C132.302 232.203 129.952 235.11 128.344 239.811L120.736 248.16L117.953 249.273L116.654 248.16V247.418L126.674 232.76L126.488 232.018L125.004 232.203C123.643 232.203 122.53 231.337 121.664 229.605C124.757 224.781 131.312 209.876 141.332 184.889L139.848 185.445C136.632 187.301 127.54 205.051 112.572 238.697C111.335 244.882 110.222 248.408 109.232 249.273L107.748 249.459C106.882 249.459 106.449 248.655 106.449 247.047C106.449 243.336 109.604 232.945 115.912 215.875C116.531 211.546 121.169 199.423 129.828 179.508H129.643C127.911 179.508 122.777 177.467 114.242 173.385L114.057 172.086C114.057 171.467 114.613 170.911 115.727 170.416L130.941 175.982L139.662 157.984H139.477C138.611 157.984 136.632 156.686 133.539 154.088L133.354 153.717C133.354 152.851 133.91 152.171 135.023 151.676C139.105 154.026 141.518 155.201 142.26 155.201H142.445C149.001 144.811 157.722 133.678 168.607 121.803L169.164 121.246C169.659 121.741 170.03 122.174 170.277 122.545C170.525 122.916 170.648 123.225 170.648 123.473L167.123 131.451L167.68 132.193C186.853 108.567 196.439 96.5065 196.439 96.0117C192.481 96.0117 188.894 94.9603 185.678 92.8574V91.9297C185.678 91.0638 185.987 90.4453 186.605 90.0742C190.935 89.332 194.151 88.9609 196.254 88.9609L196.068 87.4766C196.068 85.4974 199.594 84.5078 206.645 84.5078L208.871 84.6934L208.686 83.7656C208.686 82.8997 209.242 82.2194 210.355 81.7246L209.799 81.168C192.605 75.4779 183.884 72.3236 183.637 71.7051C183.513 71.0866 183.451 70.5918 183.451 70.2207C183.451 69.6022 184.008 69.0456 185.121 68.5508C208.253 70.5299 220.499 71.7669 221.859 72.2617C222.354 71.6432 222.973 71.0866 223.715 70.5918C226.436 71.8288 228.292 72.4473 229.281 72.4473H229.838C237.012 65.2728 241.404 61.3763 243.012 60.7578C243.507 61.2526 244.001 61.8711 244.496 62.6133L238.559 72.6328L238.744 73.1895C252.227 58.0983 260.824 49.0684 264.535 46.0996C265.154 46.5944 265.648 47.2129 266.02 47.9551C261.566 55.6243 254.763 64.5924 245.609 74.8594C246.104 75.849 258.845 78.4466 283.832 82.6523L285.131 82.0957C273.008 78.0137 261.628 75.416 250.99 74.3027C250.619 73.1895 250.434 72.5091 250.434 72.2617C250.434 71.3958 251.238 70.9629 252.846 70.9629C257.423 70.9629 271.895 73.3132 296.264 78.0137C299.851 79.8691 308.077 81.7246 320.941 83.5801L321.498 84.8789L321.312 86.5488C349.639 95.8262 369.369 100.465 380.502 100.465H382.172C386.007 101.207 388.048 101.826 388.295 102.32C388.542 102.691 388.666 103.124 388.666 103.619C388.666 105.104 386.068 105.846 380.873 105.846C376.667 105.846 371.163 105.104 364.359 103.619C364.236 103.495 363.926 103.434 363.432 103.434C362.937 103.434 361.267 103.743 358.422 104.361V104.732C358.422 105.351 357.865 105.908 356.752 106.402C355.762 106.155 354.896 106.031 354.154 106.031H353.227C362.504 108.382 367.452 110.237 368.07 111.598C368.318 112.092 368.441 112.525 368.441 112.896C368.441 113.515 368.07 114.01 367.328 114.381L345.99 118.834L346.361 119.576L351.742 119.391C353.969 119.391 355.144 119.638 355.268 120.133C355.391 120.504 355.515 120.813 355.639 121.061C355.762 121.308 355.824 121.493 355.824 121.617C355.824 122.73 354.34 123.287 351.371 123.287C348.279 123.287 343.702 122.792 337.641 121.803C331.827 122.05 326.632 122.174 322.055 122.174C312.777 122.174 305.727 121.617 300.902 120.504L301.459 121.803C309.376 122.298 318.22 125.019 327.992 129.967C328.24 130.338 328.363 130.771 328.363 131.266C328.363 132.626 326.693 133.307 323.354 133.307C314.942 133.307 296.016 129.101 266.576 120.689C252.227 114.752 244.372 111.783 243.012 111.783C237.816 116.36 228.725 128.544 215.736 148.336C215.365 148.583 215.056 148.707 214.809 148.707C213.448 148.707 212.768 147.656 212.768 145.553C212.768 144.439 212.953 143.017 213.324 141.285L212.768 139.801C209.304 141.533 199.903 155.943 184.564 183.033C212.768 201.464 227.735 210.865 229.467 211.236C248.64 217.421 273.256 227.255 303.314 240.738C304.057 241.975 319.643 249.397 350.072 263.004L353.598 261.148C354.092 261.148 354.958 261.767 356.195 263.004C364.854 254.84 374.008 246.614 383.656 238.326C402.582 219.648 413.096 209.938 415.199 209.195C415.57 209.566 415.88 209.938 416.127 210.309C416.374 210.556 416.498 210.803 416.498 211.051C415.508 212.659 403.262 224.843 379.76 247.604C369.369 260.221 363.555 266.777 362.318 267.271C363.803 269.374 370.482 271.725 382.357 274.322L382.543 275.807C382.543 276.425 381.986 276.92 380.873 277.291L372.895 276.92C370.421 279.023 369.184 281.002 369.184 282.857V284.527C368.936 284.651 368.812 285.022 368.812 285.641L369.184 286.197C372.029 288.3 373.637 290.032 374.008 291.393C373.389 292.258 372.833 292.753 372.338 292.877C367.885 291.887 365.349 291.393 364.73 291.393C360.154 297.577 357.865 301.288 357.865 302.525V302.711H358.051C359.783 302.711 366.957 305.618 379.574 311.432C379.822 311.926 379.945 312.421 379.945 312.916C379.945 313.535 379.389 313.967 378.275 314.215L355.639 305.865C354.278 307.226 353.598 308.215 353.598 308.834C353.598 308.958 353.66 309.02 353.783 309.02L375.307 325.719C375.183 328.193 374.503 329.43 373.266 329.43C371.905 329.43 363.617 325.842 348.402 318.668C316.488 370.003 297.068 402.535 290.141 416.266C294.841 422.574 297.377 426.161 297.748 427.027L296.635 428.326H294.223L294.594 429.068L299.604 432.779C299.975 433.15 300.16 433.583 300.16 434.078C300.16 434.697 299.665 435.068 298.676 435.191C297.686 435.439 296.573 435.686 295.336 435.934L301.83 440.572L302.016 442.242C302.016 442.613 301.706 442.984 301.088 443.355H300.346L274.74 430.738C274.74 431.109 275.482 432.594 276.967 435.191C276.225 436.057 275.606 436.552 275.111 436.676L270.844 435.748L270.102 436.119C271.215 436.738 271.771 437.542 271.771 438.531C271.771 439.026 271.153 439.521 269.916 440.016C259.031 434.326 253.526 431.048 253.402 430.182C247.712 435.995 243.568 440.82 240.971 444.654L236.889 446.139Z'
					fill='currentColor'
				/>
			</svg>
		)
	}
)

Logo.displayName = 'Logo'
