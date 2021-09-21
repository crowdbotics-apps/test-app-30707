import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4275/1142/b4675f7140550123313153ada4b3df40"
        }}
        style={styles.ImageBackground_72_374}
      />
      <View style={styles.View_72_375} />
      <View style={styles.View_72_376}>
        <Text style={styles.Text_72_376}>My profile</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b33d/3e23/402e7b837c7c6a38147c9f39acd8d723"
        }}
        style={styles.ImageBackground_72_378}
      />
      <View style={styles.View_72_379}>
        <View style={styles.View_72_380}>
          <Text style={styles.Text_72_380}>Friends</Text>
        </View>
        <View style={styles.View_72_381}>
          <Text style={styles.Text_72_381}>What’s in the bag</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34df/1757/5372242f46ef76fc18c84876bea50192"
          }}
          style={styles.ImageBackground_72_382}
        />
      </View>
      <View style={styles.View_146_145} />
      <View style={styles.View_72_390}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/44ee/6695/c45e12f39a05009252f48448be30055a"
          }}
          style={styles.ImageBackground_146_138}
        />
        <View style={styles.View_146_146}>
          <View style={styles.View_72_391}>
            <Text style={styles.Text_72_391}>Ralph Steadman</Text>
          </View>
          <View style={styles.View_72_392}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec2/eea8/9754dc9b0b792bd5454c638ded397b05"
              }}
              style={styles.ImageBackground_72_393}
            />
            <View style={styles.View_72_395}>
              <Text style={styles.Text_72_395}>+1 (450)-312-4876</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a30a/f2fd/eb7482daf5a5df4f6e420d421f6a450f"
        }}
        style={styles.ImageBackground_72_406}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ea/a8b2/e42cb313b661297f6c1d9ad7eef861a5"
        }}
        style={styles.ImageBackground_72_407}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f132/4565/c2f06bedebd21e10423e66ed3e2e30b9"
        }}
        style={styles.ImageBackground_72_408}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d51/6a85/08fc7a2d364b94631c6f74e29cd8ec99"
        }}
        style={styles.ImageBackground_72_409}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b5e/38c6/bb06179f98bf8a8bc061f803cc32c065"
        }}
        style={styles.ImageBackground_72_410}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df9c/68eb/bbfc2563150d355518ec87d1e3d824df"
        }}
        style={styles.ImageBackground_72_412}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d3/d1f6/b2bc12272e2a8c298e7a2f3e3f685db0"
        }}
        style={styles.ImageBackground_72_411}
      />
      <View style={styles.View_72_413}>
        <View style={styles.View_72_414}>
          <Text style={styles.Text_72_414}>Aaron Williams</Text>
        </View>
        <View style={styles.View_72_415}>
          <Text style={styles.Text_72_415}>Plan a round</Text>
        </View>
      </View>
      <View style={styles.View_72_416}>
        <View style={styles.View_72_417}>
          <Text style={styles.Text_72_417}>Austen Brave</Text>
        </View>
        <View style={styles.View_72_418}>
          <Text style={styles.Text_72_418}>Plan a round</Text>
        </View>
      </View>
      <View style={styles.View_72_419}>
        <View style={styles.View_72_420}>
          <Text style={styles.Text_72_420}>Aly Koch</Text>
        </View>
        <View style={styles.View_72_421}>
          <Text style={styles.Text_72_421}>Plan a round</Text>
        </View>
      </View>
      <View style={styles.View_72_422}>
        <View style={styles.View_72_423}>
          <Text style={styles.Text_72_423}>Adam Sweeney</Text>
        </View>
        <View style={styles.View_72_424}>
          <Text style={styles.Text_72_424}>Plan a round</Text>
        </View>
      </View>
      <View style={styles.View_72_436}>
        <View style={styles.View_72_437}>
          <Text style={styles.Text_72_437}>Avis Cartwright</Text>
        </View>
        <View style={styles.View_72_438}>
          <Text style={styles.Text_72_438}>Plan a round</Text>
        </View>
      </View>
      <View style={styles.View_72_439}>
        <View style={styles.View_72_440}>
          <Text style={styles.Text_72_440}>Bryan Watts</Text>
        </View>
        <View style={styles.View_72_441}>
          <Text style={styles.Text_72_441}>Plan a round</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d3/d1f6/b2bc12272e2a8c298e7a2f3e3f685db0"
        }}
        style={styles.ImageBackground_72_442}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d3/d1f6/b2bc12272e2a8c298e7a2f3e3f685db0"
        }}
        style={styles.ImageBackground_72_443}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d3/d1f6/b2bc12272e2a8c298e7a2f3e3f685db0"
        }}
        style={styles.ImageBackground_72_444}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d3/d1f6/b2bc12272e2a8c298e7a2f3e3f685db0"
        }}
        style={styles.ImageBackground_72_445}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1d3/d1f6/b2bc12272e2a8c298e7a2f3e3f685db0"
        }}
        style={styles.ImageBackground_72_446}
      />
      <View style={styles.View_72_447}>
        <View style={styles.View_72_448}>
          <Text style={styles.Text_72_448}>A</Text>
        </View>
        <View style={styles.View_72_449}>
          <Text style={styles.Text_72_449}>B</Text>
        </View>
        <View style={styles.View_72_450}>
          <Text style={styles.Text_72_450}>C</Text>
        </View>
        <View style={styles.View_72_451}>
          <Text style={styles.Text_72_451}>D</Text>
        </View>
        <View style={styles.View_72_452}>
          <Text style={styles.Text_72_452}>E</Text>
        </View>
        <View style={styles.View_72_453}>
          <Text style={styles.Text_72_453}>F</Text>
        </View>
        <View style={styles.View_72_454}>
          <Text style={styles.Text_72_454}>G</Text>
        </View>
        <View style={styles.View_72_455}>
          <Text style={styles.Text_72_455}>H</Text>
        </View>
        <View style={styles.View_72_456}>
          <Text style={styles.Text_72_456}>I</Text>
        </View>
        <View style={styles.View_72_457}>
          <Text style={styles.Text_72_457}>J</Text>
        </View>
        <View style={styles.View_72_458}>
          <Text style={styles.Text_72_458}>K</Text>
        </View>
        <View style={styles.View_72_459}>
          <Text style={styles.Text_72_459}>L</Text>
        </View>
        <View style={styles.View_72_460}>
          <Text style={styles.Text_72_460}>M</Text>
        </View>
        <View style={styles.View_72_461}>
          <Text style={styles.Text_72_461}>N</Text>
        </View>
        <View style={styles.View_72_462}>
          <Text style={styles.Text_72_462}>O</Text>
        </View>
        <View style={styles.View_72_463}>
          <Text style={styles.Text_72_463}>P</Text>
        </View>
        <View style={styles.View_72_464}>
          <Text style={styles.Text_72_464}>Q</Text>
        </View>
        <View style={styles.View_72_465}>
          <Text style={styles.Text_72_465}>R</Text>
        </View>
        <View style={styles.View_72_466}>
          <Text style={styles.Text_72_466}>S</Text>
        </View>
        <View style={styles.View_72_467}>
          <Text style={styles.Text_72_467}>T</Text>
        </View>
        <View style={styles.View_72_468}>
          <Text style={styles.Text_72_468}>U</Text>
        </View>
        <View style={styles.View_72_469}>
          <Text style={styles.Text_72_469}>V</Text>
        </View>
        <View style={styles.View_72_470}>
          <Text style={styles.Text_72_470}>W</Text>
        </View>
        <View style={styles.View_72_471}>
          <Text style={styles.Text_72_471}>X</Text>
        </View>
        <View style={styles.View_72_472}>
          <Text style={styles.Text_72_472}>Y</Text>
        </View>
        <View style={styles.View_72_473}>
          <Text style={styles.Text_72_473}>Z</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7399/af33/e0dd31ac273a13542159e0fa7b885ef7"
        }}
        style={styles.ImageBackground_72_474}
      />
      <View style={styles.View_90_0}>
        <View style={styles.View_90_1} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1af/ff75/40f5df368ba3f4a1816ff8bfe36ff603"
          }}
          style={styles.ImageBackground_90_3}
        />
        <View style={styles.View_90_5}>
          <View style={styles.View_90_7} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/881a/c5f5/4305ecff5f205f897a7994290eb8bdab"
          }}
          style={styles.ImageBackground_90_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed75/b81c/5e2b53c6d289ad965d56673a03bf51a8"
          }}
          style={styles.ImageBackground_90_13}
        />
        <View style={styles.View_90_18}>
          <View style={styles.View_90_19} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd9/096a/23f60e6fba4c0f2564f5192ecaefcd31"
            }}
            style={styles.ImageBackground_90_20}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b28/eadd/5d58bc36ed381d12eb892bbd2f79b54e"
          }}
          style={styles.ImageBackground_90_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8681/9582/c92d4dbd25155d6b955563fd6d9984af"
          }}
          style={styles.ImageBackground_90_27}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e208/8ca7/57e0029219b9e9051e032d343d5f594f"
        }}
        style={styles.ImageBackground_146_142}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53a6/0571/cd667c0208ac64e3590f9f4f9f37f0e4"
        }}
        style={styles.ImageBackground_146_147}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_72_374: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.74863387978142%")
  },
  View_72_375: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(15, 98, 78, 1)"
  },
  View_72_376: {
    width: wp("27.294685990338163%"),
    minWidth: wp("27.294685990338163%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.33333333333333%"),
    top: hp("9.426229508196721%"),
    justifyContent: "flex-start"
  },
  Text_72_376: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_378: {
    width: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    top: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.43961352657004%")
  },
  View_72_379: {
    width: wp("51.690821256038646%"),
    minWidth: wp("51.690821256038646%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("33.060109289617486%")
  },
  View_72_380: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_72_380: {
    color: "rgba(15, 98, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_381: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.22222222222222%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_72_381: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_382: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639365%")
  },
  View_146_145: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.939890710382514%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_72_390: {
    width: wp("57.729468599033815%"),
    minWidth: wp("57.729468599033815%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("19.94535519125683%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_146_138: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_146_146: {
    width: wp("39.371980676328505%"),
    minWidth: wp("39.371980676328505%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: hp("0.2732240437158495%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_72_391: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_72_391: {
    color: "rgba(78, 86, 80, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_392: {
    width: wp("39.371980676328505%"),
    minWidth: wp("39.371980676328505%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%")
  },
  ImageBackground_72_393: {
    width: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_72_395: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("0.6830601092896167%"),
    justifyContent: "flex-start"
  },
  Text_72_395: {
    color: "rgba(78, 86, 80, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_406: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("41.39344262295082%")
  },
  ImageBackground_72_407: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("52.86885245901639%")
  },
  ImageBackground_72_408: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("64.34426229508196%")
  },
  ImageBackground_72_409: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("75.81967213114754%")
  },
  ImageBackground_72_410: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("87.29508196721312%")
  },
  ImageBackground_72_412: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%"),
    top: hp("98.77049180327869%")
  },
  ImageBackground_72_411: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: hp("105.73770491803278%")
  },
  View_72_413: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: hp("43.30601092896175%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_72_414: {
    width: wp("22.946859903381643%"),
    minWidth: wp("22.946859903381643%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_72_414: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_415: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_72_415: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_416: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: hp("54.78142076502732%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_72_417: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_72_417: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_418: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_72_418: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_419: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: hp("66.2568306010929%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_72_420: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_72_420: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_421: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016381%"),
    justifyContent: "flex-start"
  },
  Text_72_421: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_422: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: hp("77.73224043715847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_72_423: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_72_423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_424: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_72_424: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_436: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: hp("89.20765027322405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_72_437: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_72_437: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_438: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%"),
    justifyContent: "flex-start"
  },
  Text_72_438: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_439: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.18840579710145%"),
    top: hp("100.68306010928963%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_72_440: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_72_440: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_441: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016381%"),
    justifyContent: "flex-start"
  },
  Text_72_441: {
    color: "rgba(143, 143, 143, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_442: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: hp("48.63387978142077%")
  },
  ImageBackground_72_443: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: hp("60.10928961748634%")
  },
  ImageBackground_72_444: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: hp("71.58469945355192%")
  },
  ImageBackground_72_445: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: hp("83.06010928961749%")
  },
  ImageBackground_72_446: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    height: hp("1.5027322404371584%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.183574879227052%"),
    top: hp("94.53551912568307%")
  },
  View_72_447: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    height: hp("63.387978142076506%"),
    minHeight: hp("63.387978142076506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92.27053140096618%"),
    top: hp("41.39344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_72_448: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_72_448: {
    color: "rgba(0, 184, 68, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_449: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426172%"),
    justifyContent: "flex-start"
  },
  Text_72_449: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_450: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885242%"),
    justifyContent: "flex-start"
  },
  Text_72_450: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_451: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.377049180327866%"),
    justifyContent: "flex-start"
  },
  Text_72_451: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_452: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.836065573770483%"),
    justifyContent: "flex-start"
  },
  Text_72_452: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_453: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.295081967213115%"),
    justifyContent: "flex-start"
  },
  Text_72_453: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_454: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.754098360655739%"),
    justifyContent: "flex-start"
  },
  Text_72_454: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_455: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.213114754098363%"),
    justifyContent: "flex-start"
  },
  Text_72_455: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_456: {
    width: wp("0.7246376811594203%"),
    minWidth: wp("0.7246376811594203%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.672131147540973%"),
    justifyContent: "flex-start"
  },
  Text_72_456: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_457: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.131147540983605%"),
    justifyContent: "flex-start"
  },
  Text_72_457: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_458: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.590163934426222%"),
    justifyContent: "flex-start"
  },
  Text_72_458: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_459: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.04918032786886%"),
    justifyContent: "flex-start"
  },
  Text_72_459: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_460: {
    width: wp("2.657004830917874%"),
    minWidth: wp("2.657004830917874%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.50819672131147%"),
    justifyContent: "flex-start"
  },
  Text_72_460: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_461: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.967213114754095%"),
    justifyContent: "flex-start"
  },
  Text_72_461: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_462: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34.42622950819672%"),
    justifyContent: "flex-start"
  },
  Text_72_462: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_463: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.885245901639344%"),
    justifyContent: "flex-start"
  },
  Text_72_463: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_464: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.344262295081954%"),
    justifyContent: "flex-start"
  },
  Text_72_464: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_465: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.80327868852459%"),
    justifyContent: "flex-start"
  },
  Text_72_465: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_466: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.26229508196722%"),
    justifyContent: "flex-start"
  },
  Text_72_466: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_467: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.72131147540984%"),
    justifyContent: "flex-start"
  },
  Text_72_467: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_468: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.18032786885245%"),
    justifyContent: "flex-start"
  },
  Text_72_468: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_469: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.639344262295076%"),
    justifyContent: "flex-start"
  },
  Text_72_469: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_470: {
    width: wp("2.898550724637681%"),
    minWidth: wp("2.898550724637681%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.0983606557377%"),
    justifyContent: "flex-start"
  },
  Text_72_470: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_471: {
    width: wp("2.1739130434782608%"),
    minWidth: wp("2.1739130434782608%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.557377049180324%"),
    justifyContent: "flex-start"
  },
  Text_72_471: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_472: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.01639344262295%"),
    justifyContent: "flex-start"
  },
  Text_72_472: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_473: {
    width: wp("1.932367149758454%"),
    minWidth: wp("1.932367149758454%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61.47540983606559%"),
    justifyContent: "flex-start"
  },
  Text_72_473: {
    color: "rgba(169, 167, 167, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_72_474: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1.4344262295081966%"),
    minHeight: hp("1.4344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99.7584541062802%"),
    top: hp("41.66666666666667%")
  },
  View_90_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.33879781420765%"),
    minHeight: hp("11.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111.0655737704918%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_90_1: {
    width: wp("100%"),
    height: hp("11.33879781420765%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 247, 250, 1)"
  },
  ImageBackground_90_3: {
    width: wp("100%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_90_5: {
    width: wp("24.00000014742791%"),
    minWidth: wp("24.00000014742791%"),
    height: hp("11.591914442719006%"),
    minHeight: hp("11.591914442719006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.164251207729464%"),
    top: hp("-2.380637914105179%")
  },
  View_90_7: {
    width: wp("14.492753623188406%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.620272871376812%"),
    top: hp("1.697577804815566%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(209, 207, 215, 1)",
    borderWidth: 1
  },
  ImageBackground_90_10: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("1.3661202185792547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  ImageBackground_90_13: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("1.3661202185792547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.91304347826087%")
  },
  View_90_18: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.410628019323674%"),
    top: hp("0.6830601092896273%")
  },
  View_90_19: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_90_20: {
    width: wp("6.27606433370839%"),
    minWidth: wp("6.27606433370839%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2386893304649718%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_90_23: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("1.3661202185792547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.90821256038647%")
  },
  ImageBackground_90_27: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("1.3661202185792547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.5072463768116%")
  },
  ImageBackground_146_142: {
    width: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    top: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.830917874396135%")
  },
  ImageBackground_146_147: {
    width: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    top: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.43961352657004%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
