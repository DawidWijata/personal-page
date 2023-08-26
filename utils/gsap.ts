import gsap from 'gsap';

export class GsapHelper {
    static fadeIn(element: string, trigger: string = element, params?: GsapHelperFadeParams) {
        gsap.fromTo(
            element,
            {
                x: params?.startX ?? -20,
                opacity: 0,
            },
            {
                x: params?.endX ?? 0,
                opacity: 1,
                stagger: params?.stagger ?? 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: trigger,
                    start: "40% bottom",
                },
            }
        );
    }
}

export class GsapHelperFadeParams {
    public stagger?: number;
    public startX?: number;
    public endX?: number;
}