import React from 'react'

export const IconConfig = {
  showPassword: () => {
    return (
      <svg
        width="23"
        height="14"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 0.949005C16.607 0.949005 20.852 3.26501 23.352 7.14401C23.688 7.66401 23.688 8.33601 23.352 8.85701C20.852 12.735 16.607 15.051 12 15.051C7.39298 15.051 3.14898 12.735 0.647979 8.85701C0.312979 8.33601 0.312979 7.66501 0.647979 7.14401C3.14898 3.26501 7.39298 0.949005 12 0.949005ZM12 13.851C16.198 13.851 20.065 11.741 22.344 8.20601C22.423 8.08301 22.423 7.91701 22.344 7.79401C20.064 4.25901 16.198 2.14901 12 2.14901C7.80198 2.14901 3.93598 4.25901 1.65698 7.79401C1.57698 7.91701 1.57698 8.08301 1.65698 8.20601C3.93598 11.741 7.80198 13.851 12 13.851ZM12 4.40001C10.015 4.40001 8.39998 6.01501 8.39998 8C8.39998 9.98501 10.015 11.6 12 11.6C13.985 11.6 15.6 9.98501 15.6 8C15.6 6.01501 13.985 4.40001 12 4.40001ZM9.59998 8.00001C9.59998 9.32301 10.677 10.4 12 10.4C13.323 10.4 14.4 9.32301 14.4 8.00001C14.4 6.67701 13.323 5.60001 12 5.60001C10.677 5.60001 9.59998 6.67701 9.59998 8.00001Z"
          fill="black"
        />
      </svg>
    )
  },
  heart: ({ fill }) => {
    return (
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.468 0.0104926C15.968 0.0104926 17.3937 0.638009 18.383 1.61687C19.3723 2.59549 20 4.02098 19.9998 5.52118C19.9998 6.01046 19.9498 6.48981 19.8509 6.95732C19.6523 7.89419 19.4115 8.56141 18.8616 9.40409C18.5925 9.81667 18.3537 10.1614 18.1276 10.4465C17.9068 10.7252 17.5957 11.0636 17.2021 11.4574C16.8084 11.8509 16.4892 12.1593 16.2446 12.3828C16.1231 12.4936 15.9724 12.6247 15.7958 12.7784C15.6164 12.9346 15.4101 13.114 15.1807 13.319C14.4444 13.9763 13.8748 14.4919 13.4785 14.8614C13.0875 15.2261 12.5981 15.7361 12.0103 16.3933C11.4279 17.0446 10.9303 17.7051 10.4997 18.3508C10.3769 18.535 10.202 18.6167 9.99974 18.6167C9.80843 18.6167 9.6466 18.5332 9.52111 18.3508C8.84863 17.3735 8.13827 16.5208 7.1701 15.5956C6.69147 15.138 6.32696 14.7899 6.07438 14.5636C6.02983 14.5237 5.981 14.4798 5.92779 14.4321C5.67275 14.203 5.31713 13.8836 4.85088 13.4785C4.36134 13.0532 3.98912 12.7233 3.74448 12.4997C3.49984 12.2763 3.16484 11.9627 2.7552 11.5635C2.34575 11.1647 2.04255 10.8189 1.82967 10.5422C1.61703 10.2658 1.36853 9.91722 1.09572 9.49987C0.826111 9.08726 0.623431 8.68216 0.489314 8.30837C0.219216 7.55441 0 6.55288 0 5.52115C0 4.02098 0.627745 2.59549 1.61706 1.61683C2.60657 0.638009 4.03206 0.0104599 5.53199 0.0104599C6.41484 0.0104599 7.24458 0.212486 8.04255 0.616898C8.84049 1.02111 9.48938 1.57419 10 2.27637C10.5107 1.57419 11.1595 1.02111 11.9575 0.61693C12.7552 0.212486 13.585 0.0104926 14.468 0.0104926ZM16.8724 10.0849C17.9018 8.94425 18.5185 7.78657 18.7234 6.60618C18.7844 6.25464 18.8192 5.89334 18.8195 5.52115C18.8195 4.31899 18.394 3.29771 17.5429 2.45729C16.6919 1.61687 15.6706 1.19134 14.4684 1.19134C13.628 1.19134 12.8407 1.41464 12.1281 1.87219C11.4154 2.32948 10.9023 2.93977 10.543 3.69121C10.4341 3.91886 10.245 4.02098 10.0004 4.02098C9.75575 4.02098 9.58189 3.91134 9.47908 3.69121C9.12435 2.93252 8.5749 2.32948 7.86206 1.87219C7.14918 1.41464 6.37255 1.19134 5.53216 1.19134C4.33023 1.19134 3.30892 1.6169 2.44719 2.46794C1.59611 3.30837 1.17059 4.32964 1.17059 5.52115C1.17059 6.14866 1.22621 6.71513 1.40458 7.26572L1.64925 8.02102C1.77138 8.39851 2.06814 8.8369 2.30582 9.18803C2.36051 9.26881 2.41206 9.34497 2.45765 9.41471C2.57569 9.59497 2.75565 9.81892 2.98964 10.0743C3.03999 10.1292 3.08824 10.1818 3.13436 10.2321C3.3026 10.4155 3.44259 10.5681 3.55337 10.6913C3.69931 10.8534 3.92265 11.067 4.21291 11.3295L4.8831 11.936L5.61706 12.5848C6.30611 13.194 6.80856 13.6381 7.13833 13.9359C7.4681 14.2339 7.91222 14.6833 8.48938 15.2763C9.06108 15.8641 9.56376 16.436 9.99997 16.9997C10.4149 16.4253 10.9014 15.8375 11.4575 15.2445C12.0185 14.646 12.4894 14.1703 12.8723 13.819C13.2661 13.4575 13.7685 13.0027 14.3936 12.4466C15.5983 11.3749 16.423 10.5826 16.8724 10.0849Z"
          fill={fill}
        />
      </svg>
    )
  },
  logo: ({ fill }) => {
    return (
      <svg
        width="102"
        height="42"
        viewBox="0 0 102 42"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M52.0569 3.39877C52.0569 4.13538 52.3243 4.78154 52.8464 5.31138C53.3813 5.84123 54.0052 6.11261 54.7311 6.11261C55.4569 6.11261 56.0936 5.84123 56.6157 5.31138C57.1378 4.78154 57.4052 4.13538 57.4052 3.39877C57.4052 2.66215 57.1378 2.016 56.6157 1.48615C56.0936 0.956306 55.4569 0.684921 54.7311 0.684921C54.0052 0.684921 53.3685 0.956306 52.8464 1.48615C52.3243 2.016 52.0569 2.66215 52.0569 3.39877ZM52.6682 30.24C52.6682 30.8345 52.8592 31.3385 53.2539 31.7391C53.6487 32.1397 54.1453 32.3335 54.7311 32.3335C55.3551 32.3335 55.8517 32.1397 56.2337 31.7391C56.6157 31.3514 56.8067 30.8474 56.8067 30.24V11.8892C56.8067 11.256 56.6157 10.752 56.2337 10.3643C55.8517 9.97661 55.3551 9.78277 54.7311 9.78277C54.1453 9.78277 53.6487 9.97661 53.2539 10.3643C52.8592 10.752 52.6682 11.256 52.6682 11.8892V30.24Z"
          fill={fill}
        />
        <path
          d="M79.3206 30.6018C79.3206 31.2092 79.0786 31.7132 78.5948 32.1268C78.1873 32.4628 77.7543 32.6178 77.2959 32.6178C76.6974 32.6178 76.2135 32.3723 75.8315 31.8812L68.1146 22.1889L66.0772 23.9982V30.3046C66.0772 30.912 65.8989 31.4031 65.5296 31.7649C65.1603 32.1397 64.6764 32.3206 64.0906 32.3206C63.4921 32.3206 63.0082 32.1397 62.6517 31.7649C62.2824 31.3902 62.1041 30.912 62.1041 30.3046V2.13231C62.1041 1.52493 62.2824 1.03385 62.6517 0.672002C63.021 0.297233 63.4921 0.11631 64.0906 0.11631C64.6891 0.11631 65.173 0.297233 65.5296 0.672002C65.8989 1.04677 66.0772 1.53785 66.0772 2.13231V18.9194L75.9461 9.97662C76.3026 9.61477 76.7228 9.44677 77.2067 9.44677C77.7798 9.44677 78.2382 9.66646 78.5948 10.1058C78.9513 10.4677 79.1169 10.8942 79.1169 11.3852C79.1169 11.9668 78.9004 12.432 78.4674 12.7938L70.9925 19.5526L78.8749 29.3742C79.1678 29.6972 79.3206 30.1108 79.3206 30.6018Z"
          fill={fill}
        />
        <path
          d="M96.5753 11.088C98.2689 12.0572 99.5933 13.4142 100.561 15.1458C101.516 16.8775 102 18.8548 102 21.0905C102 23.2874 101.516 25.2517 100.574 26.9834C99.6315 28.7151 98.3071 30.072 96.6135 31.0412C94.9198 32.0105 92.9843 32.5015 90.8195 32.5015C88.6547 32.5015 86.7191 32.0234 85.0127 31.0412C83.3064 30.072 81.9693 28.7151 81.027 26.9834C80.0719 25.2517 79.6007 23.2874 79.6007 21.0905C79.6007 18.8548 80.0846 16.8775 81.027 15.1458C81.982 13.4142 83.3064 12.0702 85.0127 11.088C86.7191 10.1188 88.6547 9.62769 90.8195 9.62769C92.9588 9.62769 94.8816 10.1188 96.5753 11.088ZM82.9371 21.0517C82.9371 25.4714 86.4644 29.0382 90.8067 29.0382C95.1491 29.0382 98.6637 25.4714 98.6764 21.0517C98.6764 16.632 95.1491 13.0652 90.8067 13.0652C86.4517 13.0652 82.9371 16.6449 82.9371 21.0517Z"
          fill={fill}
        />
        <path
          d="M43.0921 11.088C44.7858 12.0572 46.1101 13.4142 47.0779 15.1458C48.033 16.8775 48.5168 18.8548 48.5041 21.0905C48.5041 23.2874 48.0202 25.2517 47.0779 26.9834C46.1356 28.7151 44.8112 30.072 43.1176 31.0412C41.424 32.0105 39.4884 32.5015 37.3236 32.5015C35.1588 32.5015 33.2232 32.0234 31.5169 31.0412C31.0712 30.7957 30.6509 30.5114 30.2562 30.2012V39.8935C30.2562 40.5268 30.0652 41.0308 29.6831 41.4185C29.3011 41.8062 28.8045 42 28.1805 42C27.5948 42 27.0981 41.8062 26.7034 41.4185C26.3086 41.0308 26.1176 40.5268 26.1176 39.8935V21.0905C26.1176 18.8548 26.6015 16.8775 27.5438 15.1458C28.4989 13.4142 29.8232 12.0702 31.5296 11.088C32.994 10.248 34.6494 9.76985 36.4704 9.65354H36.5341H36.5723C36.8015 9.64062 37.0562 9.62769 37.2981 9.62769H37.3363C39.4757 9.62769 41.3985 10.1188 43.0921 11.088ZM29.4539 21.0517C29.4539 25.4714 32.9813 29.0382 37.3236 29.0382C41.6659 29.0382 45.1933 25.4714 45.1933 21.0517C45.1933 16.632 41.6659 13.0652 37.3236 13.0652C32.9685 13.0652 29.4539 16.6449 29.4539 21.0517Z"
          fill={fill}
        />
        <path
          d="M16.8854 11.1268C18.579 12.1348 19.9161 13.5046 20.9094 15.2492C21.9026 16.9938 22.3865 18.9323 22.3738 21.0775V30.2788C22.3738 30.8732 22.1828 31.3772 21.788 31.7778C21.406 32.1785 20.9094 32.3723 20.3109 32.3723C19.7251 32.3723 19.2285 32.1785 18.8337 31.7778C18.439 31.3902 18.2479 30.8862 18.2479 30.2788V30.2012C17.8659 30.5114 17.4457 30.7828 17.0127 31.0412C15.3191 32.0105 13.3835 32.5015 11.2187 32.5015C9.05393 32.5015 7.11835 32.0234 5.41198 31.0412C3.70562 30.072 2.36854 28.7151 1.42622 26.9834C1.41985 26.9769 1.41667 26.9672 1.41348 26.9575C1.4103 26.9478 1.40712 26.9382 1.40075 26.9317L1.36255 26.9188C0.993258 26.1951 0.700375 25.4455 0.483895 24.6702C0.464794 24.5926 0.445693 24.5183 0.426592 24.444C0.407491 24.3697 0.38839 24.2954 0.369288 24.2178C0.362921 24.1855 0.356554 24.1565 0.350187 24.1274C0.34382 24.0983 0.337453 24.0692 0.331086 24.0369C0.28015 23.8431 0.241949 23.6363 0.203747 23.4295L0.203745 23.4295C0.203745 23.4166 0.200562 23.4037 0.197378 23.3908C0.194195 23.3778 0.191011 23.3649 0.191011 23.352C0.152809 23.1194 0.114607 22.8868 0.0891386 22.6542V22.6283C0.0636704 22.3828 0.0382022 22.1372 0.0254682 21.8788V21.8658C0.0127341 21.6074 0 21.336 0 21.0775C0 18.9323 0.483895 16.9938 1.46442 15.2492C2.44494 13.5046 3.79476 12.1348 5.51386 11.1268C7.23296 10.1317 9.13034 9.62769 11.2187 9.62769C13.3071 9.62769 15.1918 10.1188 16.8854 11.1268ZM3.3236 21.0517C3.3236 25.4714 6.85094 29.0382 11.1933 29.0382C15.5356 29.0382 19.0629 25.4714 19.0629 21.0517C19.0629 16.632 15.5483 13.0652 11.1933 13.0652C6.8382 13.0652 3.3236 16.6449 3.3236 21.0517Z"
          fill={fill}
        />
      </svg>
    )
  },
  heartLike: ({ fill }) => {
    return (
      <svg
        width="17"
        height="15"
        viewBox="0 0 17 15"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.4836 1.48538C13.5751 -0.386848 10.5328 -0.489899 8.5 1.18016C6.46802 -0.489112 3.42566 -0.386848 1.51637 1.48538C0.538066 2.44509 0 3.72024 0 5.078C0 6.43576 0.538066 7.7117 1.51637 8.67062L7.59307 14.6318C7.84326 14.8773 8.17203 15 8.5 15C8.82797 15 9.15674 14.8773 9.40693 14.6318L15.4836 8.67062C16.4619 7.7117 17 6.43654 17 5.078C17 3.72024 16.4619 2.4443 15.4836 1.48538Z"
          fill={fill}
        />
      </svg>
    )
  },

  location: ({ fill }) => {
    return (
      <svg
        width="12"
        height="17"
        viewBox="0 0 12 17"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.43994 0.680054C2.86325 0.680054 0.439941 3.10139 0.439941 5.66467C0.439941 10.8436 5.37654 16.5268 5.23994 16.8801C5.65098 16.8384 5.74321 16.8801 6.43994 16.8801C5.94567 16.8739 6.03115 16.8384 6.43994 16.8801C6.30559 16.52 11.2399 10.7423 11.2399 5.66467C11.2399 3.10139 8.81663 0.680054 6.43994 0.680054ZM6.43994 8.15698C4.84649 8.15698 4.03994 7.32142 4.03994 6.91082C4.03994 5.25615 4.84649 4.41852 6.43994 4.41852C6.83339 4.41852 7.63994 5.25615 7.63994 6.91082C7.63994 7.32142 6.83339 8.15698 6.43994 8.15698Z"
          fill={fill}
        />
      </svg>
    )
  },

  message: ({ fill }) => {
    return (
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.1 1.1H9.9V7.7H1.7435L1.1 8.3435V1.1ZM1.1 0C0.495 0 0.00549999 0.495 0.00549999 1.1L0 11L2.2 8.8H9.9C10.505 8.8 11 8.305 11 7.7V1.1C11 0.495 10.505 0 9.9 0H1.1ZM2.2 5.5H8.8V6.6H2.2V5.5ZM2.2 3.85H8.8V4.95H2.2V3.85ZM2.2 2.2H8.8V3.3H2.2V2.2Z"
          fill={fill}
        />
      </svg>
    )
  },
  link: ({ fill }) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
          fill={fill}
        />
      </svg>
    )
  },
  file: ({ fill }) => {
    return (
      <svg
        width="12"
        height="22"
        viewBox="0 0 12 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.506 4.91071V16.2054C9.506 18.3759 7.71487 20.1339 5.50347 20.1339C3.29208 20.1339 1.50095 18.3759 1.50095 16.2054V3.92857C1.50095 2.57321 2.62165 1.47321 4.00253 1.47321C5.3834 1.47321 6.50411 2.57321 6.50411 3.92857V14.2411C6.50411 14.7812 6.05382 15.2232 5.50347 15.2232C4.95313 15.2232 4.50284 14.7812 4.50284 14.2411V4.91071H3.0019V14.2411C3.0019 15.5964 4.1226 16.6964 5.50347 16.6964C6.88435 16.6964 8.00505 15.5964 8.00505 14.2411V3.92857C8.00505 1.75804 6.21392 0 4.00253 0C1.79113 0 0 1.75804 0 3.92857V16.2054C0 19.1911 2.46155 21.6071 5.50347 21.6071C8.54539 21.6071 11.0069 19.1911 11.0069 16.2054V4.91071H9.506Z"
          fill={fill}
        />
      </svg>
    )
  },

  smile: ({ fill }) => {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 21.6071C17.0751 21.6071 22 16.7702 22 10.8036C22 4.83692 17.0751 0 11 0C4.92487 0 0 4.83692 0 10.8036C0 16.7702 4.92487 21.6071 11 21.6071ZM10.9999 20.4066C16.4001 20.4066 20.7777 16.1071 20.7777 10.8034C20.7777 5.49974 16.4001 1.20026 10.9999 1.20026C5.59983 1.20026 1.22217 5.49974 1.22217 10.8034C1.22217 16.1071 5.59983 20.4066 10.9999 20.4066ZM7.33331 9.603C8.00832 9.603 8.55553 9.06557 8.55553 8.40261C8.55553 7.73965 8.00832 7.20221 7.33331 7.20221C6.65829 7.20221 6.11108 7.73965 6.11108 8.40261C6.11108 9.06557 6.65829 9.603 7.33331 9.603ZM14.6666 9.603C15.3416 9.603 15.8888 9.06557 15.8888 8.40261C15.8888 7.73965 15.3416 7.20221 14.6666 7.20221C13.9915 7.20221 13.4443 7.73965 13.4443 8.40261C13.4443 9.06557 13.9915 9.603 14.6666 9.603ZM11 16.8054C13.7 16.8054 15.8889 14.6557 15.8889 12.0038H6.11108C6.11108 14.6557 8.29991 16.8054 11 16.8054Z"
          fill={fill}
        />
      </svg>
    )
  },

  chat: ({ fill }) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 0H1.99C0.88 0 0.00999999 0.89 0.00999999 2L0 16C0 17.1 0.88 18 1.99 18H16C17.1 18 18 17.1 18 16V2C18 0.89 17.1 0 16 0ZM16 12H12.87C12.4 12 12.02 12.34 11.89 12.8C11.54 14.07 10.37 15 9 15C7.63 15 6.46 14.07 6.11 12.8C5.98 12.34 5.6 12 5.13 12H2V3C2 2.45 2.45 2 3 2H15C15.55 2 16 2.45 16 3V12Z"
          fill={fill}
        />
      </svg>
    )
  },
}